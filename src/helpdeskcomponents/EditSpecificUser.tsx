import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as userActions from "./Users.actions";

import {AppDispatch, RootState, useAppDispatch} from "./store";

const EditSpecificUser:React.FC=(props)=>{

const[value,setValue]=useState('');

const navigate = useNavigate();

const dispatch: AppDispatch = useAppDispatch();

const onChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{setValue(event.target.value)}


const onSearch=(input: string)=>{

    let userId:string=input;
     navigate(`/users/edit/${userId}`);

}

return(<>
<br></br>
<br></br>
<br />
<h3 style={{textAlign:'center',color:'green'}}>Edit User</h3>
<Container className="mt-5" style={{
        display: 'flex',
        
        justifyContent: 'center'
        
      }}
>
      <Row>
        <Col >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter USER ID"
              className="me-2"
              aria-label="Search"
              value={value}
              required={true}
              onChange={onChange}
            />
            
            
            <Button onClick={()=>{ onSearch(value)}}>
              Search
            </Button>
            
          </Form>
        </Col>
      </Row>
    </Container>


</>);

}
export default EditSpecificUser;