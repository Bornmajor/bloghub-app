import React, { useContext, useEffect, useState } from 'react'
import { Alert,Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MyContext from '../context/context';
import { useParams,useNavigate } from 'react-router-dom';
import blogapi from '../api/blogapi';
import Loader from '../components/Loader';


const EditBlogs = () => {
    const {uiTheme,userToken} = useContext(MyContext);
    const params  = useParams();
    const blogId = params.blogId;
    const [post,setPost] = useState([]);
    const [feedback,setFeedback] = useState("");
    const [alertVariant,setAlertVariant] = useState('success');
    const [isDisabled,setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const [blogTitle,setBlogTitle] = useState("");
    const [blogContent,setBlogContent] = useState("");
    const [blogImgUrl,setBlogImgUrl] = useState("");
    const [blogCategory,setBlogCategory] = useState("");



    const fetchBlogDetail = async() =>{
      try{
       const response = await blogapi.post('blogs/view/',{
        blog_id:blogId
       })

       if(response.data.code == 1){
        setPost(response.data.res);

        setBlogTitle(response.data.res[0].blog_title);
        setBlogContent(response.data.res[0].blog_content);
        setBlogCategory(response.data.res[0].cat_id);
        setBlogImgUrl(response.data.res[0].blog_img_url);


       // document.getElementById("blog_category").value = response.data.res[0].cat_id;

       }

      }catch(err){
       console.log(err);
      }
    }

    const updateBlog = async(e) =>{
      e.preventDefault();
      setIsDisabled(true);
      //disabled submit button
    
  
      try{
      const response = await blogapi.post("blogs/update/",{
       usr_token:userToken,
       blog_id:blogId, 
       blog_title:blogTitle,
       blog_content:blogContent,
       cat_id:blogCategory,
       blog_img_url:blogImgUrl,
      }) 
      
      if(response.data.code == 1){
        setAlertVariant("success");
        setFeedback("Blog updated");
       // form.reset();
  
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

  
      }

      useEffect(()=>{
      fetchBlogDetail();
      },[])


  return (
    <div className="d-flex flex-column align-items-center my-3 mx-3">
    <div className="form-container">


  {post.length !== 0 ?
 <form onSubmit={updateBlog} id="myForm">
  <h3>Edit blog</h3>

  {feedback && (
    <Alert  key={alertVariant} variant={alertVariant} dismissible>{feedback}</Alert> 
  )}
        
        
  <FloatingLabel
    controlId="floatingInput"
    label="Title"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Blog title" name="blog_title" value={blogTitle} onChange={(e) =>setBlogTitle(e.target.value)}/>
  </FloatingLabel>

  <FloatingLabel controlId="floatingSelect" label="Select blog category">
  <Form.Select aria-label="Select blog category" name="blog_category" id="blog_category" 
  value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)}>
    <option>Category</option>
    {/* <option value={blogCategory} selected></option> */}
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
      value={blogImgUrl}
      onChange={(e) => setBlogImgUrl(e.target.value)}
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
      value={blogContent}
      onChange={(e) => setBlogContent(e.target.value)}
    />
  </FloatingLabel>
</div>

  <Button type='submit' disabled={isDisabled} className="myBtn w-100" style={{backgroundColor:uiTheme}}> Update</Button>
  </form>
  :
  <Loader />
  }
    
 
  </div>

</div>

  )
}

export default EditBlogs