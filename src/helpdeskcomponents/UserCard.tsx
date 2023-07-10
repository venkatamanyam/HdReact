import React from 'react';
import {Link} from "react-router-dom";
import { IUser } from './IUser';


interface IProps {
    user: IUser;
    clickDeleteUser: (userId: string | undefined) => void;
    
}

export const UserCard: React.FC<IProps> = (props) => {

    const {user, clickDeleteUser} = props;

    return (
        <>
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="row align-items-center">
                    
                        <div className="col-sm-8">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{user.userName}</span>
                                </li>
                                <li className="list-group-item">
                                    UserOrg : <span
                                    className="fw-bold">{user.userorg}</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-1 d-flex flex-column align-items-center">
                            <Link className="btn btn-warning" to={`/users/view/${user.userId}`}>
                                <i className="bi bi-eye-fill"></i>
                            </Link>
                            <Link className="btn btn-primary mt-2"
                                  to={`/users/edit/${user.userId}`}>
                                <i className="bi bi-pencil-square"></i>
                            </Link>
                            <button className="btn btn-danger mt-2" onClick={() => {  if (window.confirm('Are you sure you wish to delete this user?')) clickDeleteUser(user.userId)}}>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default UserCard;