import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    color: string;
    heading?: string;
}

const NavBar: React.FC<IProps> = (props) => {
    return (
        <>
            <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
                <div className="container">
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users/admin" className="nav-link">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;