import React from 'react'
import { isAutheticated } from '../auth/helper'
import Base from "../core/Base"
import {Link} from "react-router-dom"
import {Row,Col, Container,Card,CardBody,CardHeader,Button,CardText,CardTitle,Badge} from "reactstrap"

export default function AdminDashboard() {
    const {
        user:{
            name,
            email,
            role
        }}=isAutheticated();

    const adminLeftSide=()=>{
    return(
        <div className="adminleft">
        <Card className="adminleft">
        <h4 >Admin Dashboard</h4>
        <Card>
        <hr/>
        <Link to="/admin/create/category">
        <h6>Create Category</h6>
        </Link>
        <hr/>
        <Link>
        <h6>Create Product</h6>
        </Link>
        <hr/>
        <Link>
        <h6>Manage Products</h6>
        </Link>
        <hr/>
        <Link>
        <h6>Manage Orders</h6>
        </Link>
        <hr/>
        </Card>
        </Card>
        </div>
       
    )
    }
    const Role="Admin"

    const adminRightSide=()=>{
     return(
         <div className="adminright">
        <Card>
        <CardHeader><h1>Hello {name}</h1></CardHeader>
        <CardBody>
          <CardTitle className="adminrightinfo"><h4>Admin Infromation</h4></CardTitle>
          <CardText>
          <Badge href="#" color="success">Email</Badge>:{email}<br/>
          <Badge href="#" color="success">Role</Badge>:{Role}
          </CardText>
          <Button></Button>
        </CardBody>
        </Card>
        </div>
     )
    }


    return (
        <div>
            <Base>
             <h1>hello this is Admin page</h1>
             <Container>
             <Card body>
             <Row>
                 <Col xs="2" lg="4" md="3">
             {adminLeftSide()}
                </Col>
                <Col xs="2" lg="6" md="5">
             {adminRightSide()}
                </Col>
            </Row>
            </Card>
            </Container>
            </Base>
        </div>
    )
}
