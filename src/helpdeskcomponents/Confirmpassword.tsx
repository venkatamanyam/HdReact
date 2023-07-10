import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as userActions from "./Users.actions";

import {AppDispatch, RootState, useAppDispatch} from "./store";
import { ILogin } from "./ILogin";
import { Navbar } from "react-bootstrap";
import NavBar4 from "./NavBar4";
import Welcomec from "./Welcomec";
import Forgotpassword from "./ForgotPassword";
import { Iforgotpassword } from "./Iforgotpassword";
import { toast } from "react-toastify";

const Confirmpassword:React.FC=()=>{

    
    const {uid} = useParams();
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [confirmpwddata, setConfirmpwddata] = useState<Iforgotpassword>({
        
        newpassword:"",
        confirmpassword: ""
    });

    const updateconfirmpwdInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setConfirmpwddata({
            ...confirmpwddata,
            [event.target.name]: event.target.value
        })
    };


      const handleConfirmpwd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        
        dispatch(userActions.confirmpasswordAction({confirmpwddata:confirmpwddata})).then((response: any) => {
            if (!response.error)
             {
                
                toast.success("Successfully Changed!");
                //toast.success(`${uid}`);
                navigate("/login");
                
            }
            if (response.error)
            {
               
                toast.error("Mismatched Input!");
               
               
           }

            
        });






      };


return(<>
<section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleConfirmpwd(e)}>

                            
                            <div className="mb-2">
                                    <h6 style={{color:'green'}}>UserID:  {uid}</h6><br></br>
                                        
                                        
                                        
                                        
                                           
                                </div>



                            <div className="mb-2">
                               New Password     <input
                                        required={true}
                                        name={'newpassword'}
                                        value={confirmpwddata.newpassword}
                                        onChange={e => updateconfirmpwdInput(e)}
                                        className="form-control" placeholder="newpassword" type="password"/>
                                </div>
                                <div className="mb-2">
                              Confirm Password     <input
                                        required={true}
                                        name={'confirmpassword'}
                                        value={confirmpwddata.confirmpassword}
                                        onChange={e => updateconfirmpwdInput(e)}
                                        className="form-control" placeholder="confirmpassword" type="password"/>
                                </div>


                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="OK"/>
                                    
                               
                                    <Link className="btn btn-dark" to="/well">Cancel</Link>
                                
                                
                                </div>

                                </form>


                                  
                                </div>
                                </div>
                                </div>
                                </section>

                        
                                
                                

</>);

}
export default Confirmpassword;