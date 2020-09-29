import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Card,Row,Col,Form,Input,Container,Button} from "reactstrap"
import {FaHome} from "react-icons/fa"
import { isAutheticated } from '../auth/helper'
import Base from "../core/Base"
import { createCategory } from './helper/adminapicall'



export default function AddCategory() {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const {user,token}=isAutheticated()
    
    const handleChange=(event)=>{
     setError("");
     setName(event.target.value)
    }
    const onSubmit=(event)=>{
      event.preventDefault();
      setError("")
      setSuccess(false)
      createCategory(user._id,token,{name}).then(data=>{
          if(data.error){
              setError(true)
          }else{
              setError("")
              setSuccess("true");
              setName("")
          }
      })
    }

    const successMesasge=()=>{
     if(success){
     return <h4>Category Created</h4>
     }
    }
    const warningMessage=()=>{
        if(error){
            return <h4>failed to create category</h4>
            }
    }
    const CategoryForm=()=>{
        return(
            <Container>
           
            
             <Form>
             <Row>
              <Col>
              <Input onChange={handleChange} value={name} placeholder="for exammple: summer collection"></Input>
              </Col>
              <Col>
              <Button onClick={onSubmit} color="info">Create Category</Button>
              </Col>
             </Row>
             <div className="categoryform">
              <Link to="/admin/dashboard">
              <Button><FaHome size={28}/></Button>
              </Link>
             </div>
             </Form>
        
           
            </Container>
        )
    }
    return (
        <div className="categoryedit">
            <Base>
            <h1>Create New category</h1>
            <Container>
            <Card>
            {successMesasge()}
            {warningMessage()}
            {CategoryForm()}
            </Card>
            </Container>
            </Base>
        </div>
    )
}
