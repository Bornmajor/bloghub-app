import React, { useContext } from 'react'
import MyContext from '../context/context';
import { Link } from 'react-router-dom';
import logo from '../assets/images/camera.png'
import Copyright from './Copyright';

const Footer = () => {
    const {uiTheme} = useContext(MyContext);
  return (
    <>
    <div className='footer'  style={{backgroundColor:uiTheme}}>
      <div>
      <h4>
      <img src={logo} width="50"/>
        BlogHub </h4> 
      </div>

      <div>
        <h4>Quick Links</h4>
        <Link className='footer-links' to="/account?mode=login" >Login</Link>
        <Link className='footer-links' to="/about">About</Link>
        <Link className='footer-links' to="/help" >Help</Link>
      
      </div>

      <div>
        <h4>Accounts</h4>
        <Link className='footer-links' to="/account?mode=login" >Login</Link>
        <Link className='footer-links' to="/account?mode=register" >Register</Link>
      
      </div>
        
    </div>
    <Copyright />
    </>
  )
}

export default Footer