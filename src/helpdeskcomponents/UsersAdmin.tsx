import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import Heading from "./Heading";
import {Link, useNavigate, useParams} from "react-router-dom";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import UserCard from "./UserCard";
import * as userActions from "./Users.actions";
import * as userReducer from "./Users.slice";

import {useSelector} from "react-redux";
import {AppDispatch, RootState, useAppDispatch} from "./store";
import { IUser } from './IUser';
import { UserServices } from './UserServices';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const UsersAdmin: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();

    

    const navigate = useNavigate();


    /**
     * get the data from redux
     */
    const userState: userReducer.InitialState = useSelector((store: RootState) => {
                                                      return store[userReducer.userFeatureKey];
                                                     })

    const {loading, users, error} = userState;
	
	
	
	

    useEffect(() => {
        dispatch(userActions.getAllUsersAction());
    }, []);

    

    const clickDeleteUser = (userId: string | undefined): void => {
    

        if (userId) {
                        
             dispatch(userActions.deleteUserAction({userId: userId})).then((response: any) => {
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
            <div className="navbar-nav ml-auto">
            
            
                </div>
          
        
            <Heading heading={'Manage Users'} color={'text-dark'}/>
            {!loading && Object.keys(error).length > 0 && <></>}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="row">
                               
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                !loading && users.length > 0 ? <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            {
                                users.map((user: IUser, index: any) => {
                                    return (
                                        <div className="col-sm-6 mt-3" key={user.userId}>
                                            {
                                                user &&
                                                <UserCard user={user} clickDeleteUser={clickDeleteUser} />
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section> : <>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col text-center">
                                <p className="h4 text-danger">No Users Found</p>
                            </div>
                        </div>
                    </div>
                </>
            }
          
        </>
    )
};
export default UsersAdmin;