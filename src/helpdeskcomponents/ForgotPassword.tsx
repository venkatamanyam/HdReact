import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "./store";

import { Imail } from "./Imail";
import * as userActions from "./Users.actions";
import { toast } from "react-toastify";
import { json } from "stream/consumers";



const Forgotpassword:React.FC=()=>{



    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [maildata, setMaildata] = useState<Imail>({mailidORuserId:""});

    const updatemailInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMaildata({
            ...maildata,
            [event.target.name]: event.target.value
        })
    };


    const handlemail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(userActions.maildataAction({maildata:maildata})).then((response: any) => {
            if (!response.error)
             {
                

                       console.log("KKKKKKKKKKKKKKKKKKKKK");
                       console.log(response.payload);
                       console.log("KKKKKKKKKKKKKKKKKKKKK");

                          const uid=response.payload;
                navigate(`/validotp/${uid}`);
                
            }

            if (response.error)
             {
                
                       
                toast.error("Invalid Data!");
                
            }


        });
             






    };









    


return(<>


<section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handlemail(e)}>
                            <div className="mb-2">
                               Email  or UserID   <input
                                        required={true}
                                        name={'mailidORuserId'}
                                        value={maildata.mailidORuserId}
                                        onChange={e => updatemailInput(e)}
                                        className="form-control" placeholder="Enter mailid OR userId" type="string"/>
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
export default Forgotpassword;