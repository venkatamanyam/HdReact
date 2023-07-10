import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavB.css';
import { Link } from "react-router-dom";

const NavBar4:React.FC=()=>{


  return(<>



<Navbar   className="navbar " bg="primary"  expand="md" > 
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className="me-auto my-2 my-lg-0" style={{ height: '100px'}} >
            
          
            
            <NavDropdown className="navbar2"  id="local" title="UserManagement">            
              
              <NavDropdown.Item ><Link to={'/users/admin'}>
                                <button className="btn btn-success">Manage Users</button>
                            </Link></NavDropdown.Item>
              <NavDropdown.Item   href="#">Action2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href="#">Action3</NavDropdown.Item>
                
              </NavDropdown>
              
              
               
              
              <Nav.Link   style={{ color: "white"}} ><Link to={'/login'}>
                                <button className="btn btn-success">Logout</button>
                            </Link></Nav.Link>
            
            
            
            </Nav>

          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="bg-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    





</>);
}
export default NavBar4;