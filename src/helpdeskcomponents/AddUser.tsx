import React, {useEffect, useState} from 'react';
import {Link, useParams, useSearchParams} from "react-router-dom";
import Heading from "./Heading";
import NavBar from "./NavBar";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { IUser } from './IUser';



import {useNavigate} from "react-router-dom";

import * as userActions from "./Users.actions";
import * as userReducer from "./Users.slice";
import {useSelector} from "react-redux";
import {AppDispatch, RootState, useAppDispatch} from "./store";



export const AddUser: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();

    const navigate = useNavigate();


     let data:any;

    /**
     * get the data from redux
     */
    const userState: userReducer.InitialState = useSelector((store: RootState) => {
        return store[userReducer.userFeatureKey];
    });

    const {loading,  error} = userState;

    
    let [searchparams, setSearchParams] = useSearchParams();

    const [user, setUser] = useState<IUser>({
        userId:"",
        userPassword: "",
        userName:"",
        userEmail:"",
        mobilenumber:"",
        userRole:"",
        userorg:"",
        country:"",
        state:"",
        city:"",
        location:""
    
        
    });

    const updateInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=> {
        
        
        
        
        if (event.target.files)
        {    

            data=event.target.files[0].name;
    
              setSearchParams({selectedfile:event.target.files[0].name});
              
              console.log(event.target.value);
        
        }
    }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
              
         event.preventDefault();
         if (window.confirm('Are you sure you wish to Add this user?')) 
         {
             dispatch(userActions.createUserAction({user: user})).then((response: any) => {
            if (!response.error)
             {
                
                       navigate('/nothing');
                  
                       
                       
             }
          });
        }
    };

    return (
        <>
            {loading && <Spinner/>}
            
            <Heading heading={'Add User'} color={'text-success'}/>
            {!loading && Object.keys(error).length > 0 && <></>}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleSubmit(e)}   encType="multipart/form-data" >
                            <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userId'}
                                        value={user.userId}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="userid" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userPassword'}
                                        value={user.userPassword}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="password" type="password"/>
                                </div>
                                
                                
                                
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userName'}
                                        value={user.userName}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Name" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userEmail'}
                                        value={user.userEmail}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Email" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'mobilenumber'}
                                        value={user.mobilenumber}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="mobile number" type="text"/>
                                </div>
                                
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userRole'}
                                        value={user.userRole}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="userRole" type="text"/>
                                </div>
                                 <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'userorg'}
                                        value={user.userorg}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="userorg" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'country'}
                                        value={user.country}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="country" type="text"/>
                                </div>
                                
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'state'}
                                        value={user.state}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="state" type="text"/>
                                </div>


                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'city'}
                                        value={user.city}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="city" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'location'}
                                        value={user.location}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="location" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="Create"/>
                                    <Link className="btn btn-dark" to="/nothing">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
};
export default AddUser;