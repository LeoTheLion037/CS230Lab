import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function nav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"   style={{ marginLeft: 0, marginRight: 0 }} >
      <Container class = "Fluid">
        <Nav> 
            <Nav.Link href="#index">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
          
  );
}

export default nav;

