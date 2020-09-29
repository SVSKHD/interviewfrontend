import React from "react"
import {Jumbotron, Container} from "reactstrap"
const FooterPart = () =>{
    return (
        <div className="footerextends1">
          <Jumbotron className="footerextends" fluid>
            <Container fluid>
              <h1 className="display-3">Next click Ecomerce app</h1>
              <p className="lead">Well sell your products</p>
            </Container>
          </Jumbotron>
        </div>
      );
}
export default FooterPart;