import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../context/context';
import logo from '../assets/images/camera.png'
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
    const {uiTheme,isLogin,setIsLogin,setUserToken,username} = useContext(MyContext);
    const navigate = useNavigate();

    const logOut = () =>{
      localStorage.removeItem("usr_token");
      setUserToken("");
      setIsLogin(false);
      navigate('/account?mode=login');
     }
  
  return (
    <Navbar expand="lg" className="" id="navbar" style={{backgroundColor:uiTheme}} sticky="top">
      
    <Container>
      <Navbar.Brand href="/"  as={Link} className="nav-link"> 
      <img src={logo} width="50"/>
      BlogHub
      </Navbar.Brand>

     
      {/* <div className='dropdown-profile' >
       
       <NavDropdown title={"Ozzy"} id="basic-nav-dropdown" >
           <NavDropdown.Item href="action/3.1">Profile</NavDropdown.Item>
           <NavDropdown.Item href="action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="action/3.4">
            Logout
           </NavDropdown.Item>
      </NavDropdown>
   
     </div> */}
     
   
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle-button"/>
     
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

        <Nav >
      
        <Nav.Link href="/create" as={Link} to="/create"> <i class="fas fa-plus"></i> Create blog</Nav.Link>
          {/* <Nav.Link href="/"
           as={Link}
           className={({isActive}) => 
            isActive?'active':undefined} 
           to="/"
           >Home</Nav.Link> */}
          
          <Nav.Link href="/about" as={Link} to="/about">About</Nav.Link>
          <Nav.Link href="/help" as={Link} to="/help">Help</Nav.Link>

          {isLogin ? 
          <>
          {username && <Nav.Link href="/dashboard" as={Link} to="/dashboard">{username}</Nav.Link>}
           
           <Nav.Link onClick={logOut} >Logout</Nav.Link>
          </>:
          <Nav.Link href="/account?mode=login" as={Link} to="/account?mode=login">Login</Nav.Link>
          }
          
         
          
          


         
          
        </Nav>

      </Navbar.Collapse>
  

      {/* <NavDropdown title={"Ozzy"} id="basic-nav-dropdown" className='justify-content-end'>
            <NavDropdown.Item href="action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="action/3.4">
             Logout
            </NavDropdown.Item>
       </NavDropdown> */}

    </Container>
  </Navbar>
  )
}

export default NavBar