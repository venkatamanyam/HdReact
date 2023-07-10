import React, {useEffect} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";
import NavBar from "./NavBar";
import Heading from "./Heading";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import * as userActions from "./Users.actions";
import * as userReducer from "./Users.slice";

import {useSelector} from "react-redux";
import {AppDispatch, RootState, useAppDispatch} from "./store";
import NoDataFound from './NoDataFound';

export const ViewUser: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const {userId} = useParams();
const navigate = useNavigate();
    /**
     * get the data from redux
     */
    const userState: userReducer.InitialState = useSelector((store: RootState) => {
        return store[userReducer.userFeatureKey];
    })

    const {loading, user,  error} = userState;

    useEffect(() => {
        if (userId) {
            dispatch(userActions.getUserAction({userId: userId}))
                 
            
        }
    }, [userId]);

    return (
        <>
        
            {loading && <Spinner/>}
            {user?<></>:<><NoDataFound/></>}
            
            {user?<> <h1 style={{color:'blue'}}>View User</h1></>:<></>}

            {!loading && Object.keys(error).length > 0 && <></>}
            {
                !loading && user && Object.keys(user).length > 0 &&
                <section className="mt-3">  
                    <div className="container">
                        <div className="row mt-3 align-items-center">

                         <div className="col-sm-8 offset-1">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        UserId : <span className="fw-bold">{user.userId}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Password : <span className="fw-bold">{user.userPassword}</span>
                                    </li>
                                    <li className="list-group-item">
                                        UserName : <span className="fw-bold">{user.userName}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Usermail : <span className="fw-bold">{user.userEmail}</span>
                                    </li>
                                    <li className="list-group-item">
                                        MobileNumber: <span className="fw-bold">{user.mobilenumber}</span>
                                    </li>
                                    <li className="list-group-item">
                                        UserOrg : <span className="fw-bold">{user.userorg}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Role : <span className="fw-bold">{user.userRole}</span>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        Country : <span className="fw-bold">{user.country}</span>
                                    </li>
                                    <li className="list-group-item">
                                        State : <span className="fw-bold">{user.state}</span>
                                    </li>
                                    <li className="list-group-item">
                                        City : <span className="fw-bold">{user.city}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Location : <span className="fw-bold">{user.location}</span>
                                    </li>
                                    </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            
                        </div>
                    </div>
                </section>
            
            }

        </>

    )
};
export default ViewUser;