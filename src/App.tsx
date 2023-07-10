import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Samplec from './helpdeskcomponents/Samplec';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import UsersAdmin from './helpdeskcomponents/UsersAdmin';
import { NotFound404 } from './helpdeskcomponents/NotFound404';
import ViewUser from './helpdeskcomponents/ViewUser';
import EditUser from './helpdeskcomponents/EditUser';
import AddUser from './helpdeskcomponents/AddUser';
import Home from './helpdeskcomponents/Home';
import { ToastContainer } from 'react-toastify';
import NavBar4 from './helpdeskcomponents/NavBar4';
import Login from './helpdeskcomponents/Login';
import { UserServices } from './helpdeskcomponents/UserServices';
import { Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Welcomec from './helpdeskcomponents/Welcomec';
import image from './helpdeskcomponents/cms2.png';
import Empty from './helpdeskcomponents/Empty';
import ViewSpecificUser from './helpdeskcomponents/ViewSpecificUser';
import DeleteSpecificUser from './helpdeskcomponents/DeleteSpecificUser';
import EditSpecificUser from './helpdeskcomponents/EditSpecificUser';
import NoDataFound from './helpdeskcomponents/NoDataFound';
import Uploadfile from './helpdeskcomponents/Uploadfile';
import ChangePassword from './helpdeskcomponents/ChangePassword';
import Forgotpassword from './helpdeskcomponents/ForgotPassword';
import Confirmpassword from './helpdeskcomponents/Confirmpassword';
import OTPcomponent from './helpdeskcomponents/OTPcomponent';
import Successmsg from './helpdeskcomponents/Successmsg';
import FailureMsg from './helpdeskcomponents/FailureMsg';
import CreateTicket from './helpdeskcomponents/CreateTicket';






function App() {


  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const[time,setTime]=useState(new Date());

  let hours=time.getHours();

  useEffect(() => {

      setInterval(()=>setTime(new Date()),1000)
    
    const user = UserServices.getCurrentUser();

    window.addEventListener('popstate', (e) => {
      window.history.forward();
    });

    

    if (user) {
      setCurrentUser(JSON.parse(user));

    }

    

}, []);





  const logOut = () => {
    UserServices.logout();
    
  setCurrentUser(undefined);

  navigate("/well");
  };

  return (

    
    <><ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />



     <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">

      {currentUser ? (
          <><div className="collapse navbar-collapse justify-content-between" >
            <div className="navbar-nav" >
            <DropdownButton id="dropdown-basic-button" title="User Management">
                
                <NavDropdown.Item ><Link to={`/users/admin`}>
                                <button className="btn btn-success">Manage Users</button>
                            </Link></NavDropdown.Item>
                <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Action3</Dropdown.Item>
              </DropdownButton>

              
              
              </div>
              
              <div>
               

                <Navbar.Text style={{color:'yellow'}}>" Whoever is happy will make others happy too. -Anne Frank" </Navbar.Text><br></br><br />
                <Navbar.Text style={{color:'white'}}> {hours < 12 ? "Good Morning" : hours>=12 && hours< 17 ?"Good Afternoon":"Good Evening"} <span style={{color:'violet'}}>!!&nbsp;{currentUser}</span></Navbar.Text>

              </div>
              
              
              <div className=''>
              <h6  style={{color:'white'}}>{currentUser} </h6>
                   
               

              <DropdownButton  id="dropdown-basic-button" title="">
                   <NavDropdown.Item >
                    <button className=' btn btn-success' style={{width:'120px'}}>
                  <a style={{color:'yellow',width:'120px'}} href="/login" className="nav-item nav-link" onClick={logOut}>
                  LogOut
                </a>
                </button>&nbsp;
                </NavDropdown.Item >
                <Link className="btn btn-warning " style={{width:'180px'}}
                                    to={`/changepwd`}>
                                  <i className=""></i>&nbsp;Change Password
                              </Link>
                
                </DropdownButton>
                     
                   
             
                        </div>          
              
              </div>
              
              </>

              
              
              

        ) : (
          
          <div className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" style={{ color: "white" }}>
                    Login
                  </Link>
                </li>


              </div>
              
                
                
          

          
          
        )}
      </nav>


      <div>


</div>





             
               { currentUser?
                           ( <nav className="navbar navbar-expand navbar-dark bg-primary mt-3">
                               <div className="col">
                                    
                                    <Link className="btn btn-primary"  style={{width:'100px'}} to={"/nothing"}>
                               <i className="bi bi-house-check-fill"></i>&nbsp;HOME</Link>
                               
                               </div>
                                <div className="col">
                                    
                                    <Link className="btn btn-success"  style={{width:'130px'}} to={"/users/add"}>
                                        <i className="bi bi-plus-circle-fill"></i> CreateNewUser</Link>
                                </div>

                                <div className="col">
                                    
                                <Link className="btn btn-warning" style={{width:'130px'}} to={`/viewspecific`}>
                                <i className="bi bi-eye-fill"></i>&nbsp;View User
                            </Link>
                                </div>
                                <div className="col">
                                    
                                <Link className="btn btn-info " style={{width:'130px'}}
                                  to={`/editspecific`}>
                                <i className="bi bi-pencil-square"></i>&nbsp;Edit User
                            </Link>
                                </div>
                                <div className="col">
                                    
                                <Link className="btn btn-danger" style={{width:'130px'}} to={`/deletespecific`}>
                                <i className="bi bi-trash-fill"></i>&nbsp;Delete User
                            </Link>
                                </div>
                                <div className="col">
                                    
                                    <Link className="btn btn-success" style={{width:'130px'}} to={"/users/admin"}>
                                    <i className="bi bi-card-list"></i>&nbsp;All Users</Link>
                                </div>
                                </nav>):(<></>)
                       }
           
          

        <Routes>
          
          <Route  path={'/entrancetomanage'} element={<NavBar4 />} />
          <Route  path={'/nothing'} element={<Empty />} />
          <Route  path={'/viewspecific'} element={<ViewSpecificUser />} />
          <Route  path={'/editspecific'} element={<EditSpecificUser />} />
          <Route  path={'/deletespecific'} element={<DeleteSpecificUser />} />
          <Route  path={'/nodata'} element={<NoDataFound />} />
          <Route  path={'/login'} element={<Login />} />
          <Route  path={'/'} element={<Empty />} />
          <Route  path={'/failure'} element={<FailureMsg />} />
          <Route  path={'/validotp/:uid'} element={<OTPcomponent/>} />
          <Route  path={'/success'} element={<Successmsg/>} />
          <Route  path={'/forgotpwd'} element={<Forgotpassword />} />
          <Route  path={'/changepwd'} element={<ChangePassword />} />
          <Route  path={'/confirmpwd/:uid'} element={<Confirmpassword />} />
          <Route  path={'/well'} element={<Welcomec />} />
          <Route path={'/users/admin'} element={<UsersAdmin />} />
          <Route path={'/users/add'} element={<AddUser />} />
          <Route path={'/users/edit/:userId'} element={<EditUser />} />
          <Route path={'/users/view/:userId'} element={<ViewUser />} />
          <Route  path={'/fileuploadtask/:ticketId'} element={<Uploadfile/>} />
          
          </Routes>
        
      
      
      </div></>
  )
}

export default App;
