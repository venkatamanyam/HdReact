import React from 'react';
import {Link} from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <>
            <div className="landing">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h1 className="display-1">User Management</h1>
                        <div>
                            <Link to={'/users/admin'}>
                                <button className="btn btn-success">Manage Users</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;