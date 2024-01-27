import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import { useSearchParams,Link, useNavigate } from 'react-router-dom';
import MyContext from '../context/context';
import { useContext } from 'react';
import blogapi from '../api/blogapi';
import z from '../assets/images/z.png'

const AccountForm = () => {
  const [isDisabled,setIsDisabled] = useState(false);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const {uiTheme,storeUserToken} = useContext(MyContext);
  const [feedback,setFeedback] = useState('');
  const [alertVariant,setAlertVariant] = useState('success');
  const navigate = useNavigate();

  
  
  const processForm = async(e) =>{
    e.preventDefault();

    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    //check if mode 
    if(mode == 'login'){
      await loginUser(email,pwd);
    }else{
      //register user
      await registerUser(email,pwd);
     
    }

    //console.log(email,pwd);
    //setAlertVariant('danger');
   
   // navigate('/');

  }

  const loginUser = async(email,pwd) =>{

    const response = await blogapi.post('accounts/login/',{
    email:email,
    pwd:pwd
    });

    if(response.data.code == 1){
    setAlertVariant('success');
    setFeedback('User registered successfully');
    setTimeout(() => {
      setFeedback('Redirecting..');
      }, 2000);
     
    
    storeUserToken(response.data.res);
    //navigate after login
    setTimeout(() => {navigate('/')}, 4000);
    }else{
      setAlertVariant('danger');
      setFeedback('Error: '+ response.data.message);
    }

   
  }

  const registerUser = async(email,pwd) =>{

    const response = await blogapi.post('accounts/registration/',{
    email:email,
    pwd:pwd
    });

    if(response.data.code == 1){
    setAlertVariant('success');
    setFeedback('User registered successfully');
    setTimeout(() => {
    setFeedback('Redirecting..');
    }, 2000);
   
    
    storeUserToken(response.data.res);
    //navigate after login
    setTimeout(() => {navigate('/')}, 4000);
    }else{
      setAlertVariant('danger');
      setFeedback('Error: '+ response.data.message);
    }

   
  }
  return (
    <div className="d-flex flex-column align-items-center my-3 mx-3">

      

      <div  className="form-container">
       <img src={z} className="form-login-img"  width="100%"/> 
       
        
       
        
      <form onSubmit={processForm} className="form-layout">
     {feedback && (
         <Alert  key={alertVariant} variant={alertVariant} dismissible>{feedback}</Alert> 
        )}
        

  <h3> {mode == 'login' ? 'Login' : 'Create account' }</h3>
       <FloatingLabel
        controlId="email"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Email" id="email" required />
      </FloatingLabel>

      <FloatingLabel
        controlId="pwd"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Password" id="pwd" required />
      </FloatingLabel>

      <Button type='submit'  className="myBtn w-100" style={{backgroundColor:uiTheme}} disabled={isDisabled}>
        {mode == 'login' ? 'Login' : 'Register'}
        </Button>
      <div className='my-3'>
       
       <Link className='text-decoration-none' to={mode == 'login' ? '/account?mode=register':'/account?mode=login'}>
        {mode == 'login' ? 'Create an account': 'Already have an account'}
        </Link>

      </div>

      </form>
      </div>
    </div>
 
  )
}

export default AccountForm;