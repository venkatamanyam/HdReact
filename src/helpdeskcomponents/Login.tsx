import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userActions from "./Users.actions";

import {AppDispatch, RootState, useAppDispatch} from "./store";
import { ILogin } from "./ILogin";
import { Navbar } from "react-bootstrap";
import NavBar4 from "./NavBar4";
import Welcomec from "./Welcomec";
import Forgotpassword from "./ForgotPassword";

const Login:React.FC=()=>{

    
    
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [logdata, setLogdata] = useState<ILogin>({
        
        userId:"",
        userPassword: ""
    });

    const updateLogInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setLogdata({
            ...logdata,
            [event.target.name]: event.target.value
        })
    };


      const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(userActions.signinAction({logdata:logdata})).then((response: any) => {
            if (!response.error)
             {
                
                       
                navigate("/nothing");
                
            
                window.location.reload();

                

                
                       
             }
        });







      };


return(<>
<section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleLogin(e)}>
                            <div className="mb-2">
                               UserId     <input
                                        required={true}
                                        name={'userId'}
                                        value={logdata.userId}
                                        onChange={e => updateLogInput(e)}
                                        className="form-control" placeholder="userId" type="text"/>
                                </div>
                                <div className="mb-2">
                               Password     <input
                                        required={true}
                                        name={'userPassword'}
                                        value={logdata.userPassword}
                                        onChange={e => updateLogInput(e)}
                                        className="form-control" placeholder="userPassword" type="password"/>
                                </div>


                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="Login"/>
                                    
                                &nbsp;&nbsp;
                                    
                                    
                                    <Link className="btn btn-warning " style={{width:'150px'}}
                                    to={`/forgotpwd`}>
                                  <i className=""></i>&nbsp;Forgot Password
                              </Link>
                                    
                                
                                
                                </div>

                                </form>


                                  
                                </div>
                                </div>
                                </div>
                                </section>

                        
                                
                                

</>);

}
export default Login;