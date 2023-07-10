import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import NavBar from "./NavBar";
import Heading from "./Heading";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import * as userActions from "./Users.actions";
import * as userReducer from "./Users.slice";
import {useSelector} from "react-redux";
import {AppDispatch, RootState, useAppDispatch} from "./store";
import { IUser } from './IUser';
import NoDataFound from './NoDataFound';

export const EditUser: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate();
    const {userId} = useParams();

    /**
     * get the data from redux
     */
    const userState: userReducer.InitialState = useSelector((store: RootState) => {
        return store[userReducer.userFeatureKey];
    })

    const {loading, user:userRedux, error} = userState;

    const [user, setUser] = useState<IUser>({
        
        userId: "",
        userPassword: "",
        userName:"",
        userEmail:"",
        mobilenumber:"",
        userorg:"",
        userRole:"",
        country:"",
        state:"",
        city:"",
        location:""
       });

    
    /**
     * when employeeId, then get the employee from server
     */
    useEffect(() => {
        if (userId) {
            const response=dispatch(userActions.getUserAction({userId:userId}));
            
        }
    }, [userId]);

    /**
     * if change in the contact Redux, populate the data
     */
    useEffect(() => {
        if (userRedux && Object.keys(userRedux).length > 0) {
            setUser({...user,
                
                        userId: userRedux.userId,
                        userPassword: userRedux.userPassword,
                        userName:userRedux.userName,
                        userEmail:userRedux.userEmail,
                        mobilenumber:userRedux.mobilenumber,
                        userorg:userRedux.userorg,
                        userRole:userRedux.userRole,
                        country:userRedux.country,
                        state:userRedux.state,
                        city:userRedux.city,
                        location:userRedux.location
                
            })
        }
    }, [userRedux]);


    /**
     * when the form field data changes, update the local state
     * @param event
     */
    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    /**
     * form submit for update
     * @param event
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (window.confirm('Are you sure you wish to Edit this user?'))
        {
          if (userId) 
          {
            dispatch(userActions.updateUserAction({
                user: user,
                userId: userId
            })).then((response: any) => {
                
                if (!response.error) {
                    navigate("/nothing");
                }
            
            });
          }
        }
    };

    

    return (
        <>
            {loading && <Spinner/>}
            
            {userRedux?<></>:<><NoDataFound/></>}
            
            {userRedux?<> <h1 style={{color:'blue'}}>Edit User</h1></>:<></>}
            {!loading && Object.keys(error).length > 0 && <></>}
            {userRedux?<>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleSubmit(e)}>
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
                                        name={'userOrg'}
                                        value={user.userorg}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="userOrg" type="text"/>
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
                                    <input className="btn btn-primary me-2" type="submit" value="Update"/>
                                    <Link className="btn btn-dark" to="/nothing">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section></>:<></>}
        </>
    )
};
export default EditUser;