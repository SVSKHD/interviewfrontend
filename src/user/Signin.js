import React,{useState} from 'react'
import Base from "../core/Base"
import {Alert,Form,Button,Input,Container} from "reactstrap"
import {Link,Redirect} from "react-router-dom"
import {authenticate, isAutheticated, signin} from "../auth/helper"

 const Signin=()=> {

    const [values,setValues]=useState({
       email:"hithesh@svsk.com",
       password:"hithesh",
       error:"",
       loading:false,
       didRidirect:false
    })

    const {email,password,error,loading,didRidirect}=values;
    
    const {user}=isAutheticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

    const performRedirect = () =>{
        if(didRidirect){
            if(user && user.role===1){
                return <Redirect to="/admin/dashboard"/>
            }else{
                return <Redirect to="/user/dashboard"/>
            }
        }
        if(isAutheticated()){
            return <Redirect to="/"/>
        }
    }
    const onSubmit=event=>{
      event.preventDefault();  
      setValues({
          ...values,
          error:false,
          loading:true
      })
      signin({email,password})
      .then(data=>{
          if (data.error){
            setValues({
                ...values,
                error:data.error,
                loading:false
            })
          }else{
              authenticate(data,()=>{
                  setValues({
                      ...values,
                      didRidirect:true
                  })
              })
          }
      })
      .catch(console.log("signin request failed"));
    }

      const loadingMessage = ()=>{
        return(
         loading && (
            <Alert color="success">Loading..</Alert>
         )
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

    const SigninForm=()=>{
        return(
            <div>
     
              <Form>
              <Container>
              <Input onChange={handleChange("email")} value={email} className="NS" placeholder="Email"type="email"/>
              <Input onChange={handleChange("password")} value={password} className="NS" placeholder="password"type="password"/>
              <Button onClick={onSubmit} color="success" >submit</Button>
              </Container>
              </Form>

            </div>
        )
     }
    return (
        <div>
            <Base title="NextClick Signup">
            <h1>Signin works</h1>
            {loadingMessage()}
            {errorMessage()}
            {SigninForm()}
            {performRedirect()}
            </Base>
        </div>
    )
}
export default Signin;