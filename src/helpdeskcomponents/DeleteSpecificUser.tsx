import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as userActions from "./Users.actions";

import {AppDispatch, RootState, useAppDispatch} from "./store";

const DeleteSpecificUser:React.FC=(props)=>{

const[value,setValue]=useState('');

const navigate = useNavigate();

const dispatch: AppDispatch = useAppDispatch();

const onChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{setValue(event.target.value)}


const onSearch=(input: string)=>{

    let userId:string=input;
    if (window.confirm('Are you sure you wish to Delete this user?')) 
    {  
      dispatch(userActions.deleteUserAction({userId: userId})).then((response: any) => {
        
          if (!response.error)
            {
            
                   navigate('/nothing');
              

                   
              }
              else{
                navigate('/nodata');
              }
        }
      );
    } 
}

return(<>
<br></br>
<br></br>
<br />
<h3 style={{textAlign:'center',color:'green'}}>Delete User</h3>
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
              aria-label="Delete"
              value={value}
              required={true}
              onChange={onChange}
            />
            <Button onClick={()=>{ onSearch(value)}}>
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>


</>);

}
export default DeleteSpecificUser;