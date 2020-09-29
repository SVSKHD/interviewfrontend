import React,{useState} from 'react'
import Base from "../core/Base"
import {Alert,Form,Button,Input,Container,Label, FormGroup} from "reactstrap"
import {Link} from "react-router-dom"
import {signup} from "../auth/helper"

   
 const Signup=()=> {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
      });
    
      const { 
      name,
      email,
      password,
      error,
      success } = values;
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false });
        signup({name,email,password })
          .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error, success: false });
            } else {
              setValues({
                ...values,
                name: "",
                email: "",
                password: "",
                error: "",
                success: true
              });
            }
          })
          .catch(console.log("Error in signup"));
      };

    const SignupForm=()=>{
        return(
            <div>
              <Form>
              <Input value={name} onChange={handleChange("name")} className="NS" placeholder="Name" type="text"/><hr/>
              <Input value={email} onChange={handleChange("email")} className="NS" placeholder="Email"type="email"/><hr/>
              <Input value={password} onChange={handleChange("password")} className="NS" placeholder="password"type="password"/><hr/>
              <Button onClick={onSubmit} color="success" >submit</Button>
              </Form>
            </div>
        )
     }
     const successMessage = ()=>{
       return(
         <div>
           <Container>
           <Alert color="success" style={{display:success?"":"none"}}>New account was created succesfully, you can now <Link to="/signin">Login</Link></Alert>
          </Container>         
         </div>
       )
     }

     const errorMessage = ()=>{
      return(
        <div>
          <Container>
          <Alert color="danger" style={{display:error?"":"none"}}>{error}</Alert>
         </Container>         
        </div>
      )
    }
    
    return (
        <div>
            <Base title="NextClick Signup">
            <h1>Signup works</h1>
            <Container>
                {successMessage()}
                {errorMessage()}
                {SignupForm()}
            <h4>{JSON.stringify(values)}</h4>
            </Container>
            </Base>
        </div>
    )
}
export default Signup;