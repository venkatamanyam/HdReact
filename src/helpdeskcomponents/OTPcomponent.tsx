import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "./store";

import { Imail } from "./Imail";
import * as userActions from "./Users.actions";
import { IOTP } from "./IOTP";
import { toast } from "react-toastify";



const OTPcomponent:React.FC=()=>{



    const navigate = useNavigate();
    const {uid} = useParams();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [otpdata, setOtpdata] = useState<IOTP>({});

    const updateotpInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setOtpdata({
            ...otpdata,
            [event.target.name]: event.target.value
        })
    };


    const handleotp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(userActions.otpdataAction({otpdata:otpdata})).then((response: any) => {
            if (!response.error)
             {
                
                       
                navigate(`/confirmpwd/${uid}`);
                
            }
            if (response.error)
             {
                
                       
                toast.error("Invalid OTP!");

                
            }


        });
             






    };









    


return(<>

<h5 className="mt-5 ms-5" style={{color:'green'}}>Enter OTP Which Is Sent To Mail</h5><br></br>
<section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleotp(e)}>
                            <div className="mb-2">
                               OTP     <input
                                        required={true}
                                        name={'otp'}
                                        value={otpdata.otp}
                                        onChange={e => updateotpInput(e)}
                                        className="form-control" placeholder="otp" type="number"/>
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
export default OTPcomponent;