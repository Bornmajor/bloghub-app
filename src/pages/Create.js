import React, { useContext, useEffect, useState } from 'react'
import { Alert,Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MyContext from '../context/context';
import blogapi from '../api/blogapi';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const {uiTheme,userToken} = useContext(MyContext);
    const [feedback,setFeedback] = useState("");
    const [alertVariant,setAlertVariant] = useState('success');
    const [isDisabled,setIsDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
    if(userToken == '' || userToken == null){
    navigate('/account?mode=login');
    }
    },[])

    const createBlog = async(e) =>{
    e.preventDefault();
    setIsDisabled(true);
    //disabled submit button
    
    let form = document.getElementById('myForm');
    let blog_title = document.getElementById('blog_title').value;
    let blog_content = document.getElementById('blog_content').value;
    let blog_category = document.getElementById('blog_category').value;
    let blog_img_url = document.getElementById('blog_img_url').value;

    try{
    const response = await blogapi.post("blogs/create/",{
     blog_title:blog_title,
     blog_content:blog_content,
     cat_id:blog_category,
     blog_img_url:blog_img_url,
     usr_token:userToken
    }) 
    
    if(response.data.code == 1){
      setAlertVariant("success");
      setFeedback("Blog created");
      form.reset();

    }else{
      setAlertVariant("danger");
      setFeedback("Error occured!! try later"); 
    }
    }catch(err){
    setAlertVariant("danger");
    setFeedback("Error occured!! try later");
    console.log("Error ocurred");
    }
    setIsDisabled(false);
    //console.log(blog_title,blog_content,blog_category,blog_img_url);
  

    }

    // const postBlog = async() =>{
    //   try{
     

    //   }catch(err){

    //   }
    // }

  return (
    <div className="d-flex flex-column align-items-center my-3 mx-3">
        <div className="form-container">

     <form onSubmit={createBlog} id="myForm">
      <h3>Create a blog</h3>
      {feedback && (
         <Alert  key={alertVariant} variant={alertVariant} dismissible>{feedback}</Alert> 
        )}
        
        
     <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Blog title" id="blog_title" name="blog_title" required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Select blog category">
      <Form.Select aria-label="Select blog category" name="blog_category" id="blog_category" required>
        <option>Category</option>
        <option value="1">Technology</option>
        <option value="2">Travel</option>
        <option value="3">Health and wellness</option>
        <option value="4">Lifestyle</option>
        <option value="5">Finance</option>
        <option value="6">Food and Cooking</option>
        <option value="7">Entertainment</option>
      </Form.Select>
    </FloatingLabel>

   <div className='my-3'>
     <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> <i class="fas fa-images"></i> </InputGroup.Text>
        <Form.Control
          placeholder="Image url"
          aria-label="Valid image url"
          aria-describedby="basic-addon1"
          name="blog_img_url"
          id="blog_img_url"
          required
        />
      </InputGroup>

   </div>
   <div className="my-3">
  <FloatingLabel controlId="floatingTextarea2" label="Blog content">
        <Form.Control
          as="textarea"
          placeholder="Blog content"
          style={{ height: '250px' }}
          name="blog_content"
          id="blog_content"
          required
        />
      </FloatingLabel>


   </div>
    
      <Button type='submit' disabled={isDisabled} className="myBtn w-100" style={{backgroundColor:uiTheme}}> Upload</Button>
      </form>
      </div>

    </div>
  )
}

export default Create