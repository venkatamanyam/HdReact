import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userActions from "./Users.actions";

import {AppDispatch, RootState, useAppDispatch} from "./store";
import { ILogin } from "./ILogin";
import { Navbar } from "react-bootstrap";
import NavBar4 from "./NavBar4";
import Welcomec from "./Welcomec";
import { Ichangepassword } from "./Ichangepassword";

const ChangePassword:React.FC=(props)=>{

    
    
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [pwddata, setPwddata] = useState<Ichangepassword>({
        
        oldpassword:"",
        newpassword: ""
    });

    const updatePwdInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPwddata({
            ...pwddata,
            [event.target.name]: event.target.value
        })
    };


      const handlePwddata = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(userActions.changepasswordAction({pwddata:pwddata})).then((response: any) => {
            if (!response.error)
             {
                
                       
                navigate("/success");
                
            }
            if(response.error)
            {
                navigate("/failure");
            }
        });

};





return(<>
<section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handlePwddata(e)}>
                            <div className="mb-2">
                               Old Password     <input
                                        required={true}
                                        name={'oldpassword'}
                                        value={pwddata.oldpassword}
                                        onChange={e => updatePwdInput(e)}
                                        className="form-control" placeholder="oldpassword" type="password"/>
                                </div>
                                <div className="mb-2">
                              New Password     <input
                                        required={true}
                                        name={'newpassword'}
                                        value={pwddata.newpassword}
                                        onChange={e => updatePwdInput(e)}
                                        className="form-control" placeholder="newpassword" type="password"/>
                                </div>


                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="OK"/>
                                </div>

                                </form>


                                  
                                </div>
                                </div>
                                </div>
                                </section>
                                
                                

</>);

}
export default ChangePassword;