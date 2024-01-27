import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import blogapi from '../api/blogapi'
import Loader from './Loader'
const BlogCategory = ({id,cat,}) => {
  const [blogs,setBlogs] = useState([]);

  const fetchCategoryBlogs = async() =>{
    try{
     const response = await blogapi.post('blogs/view/',{
      cat_id:id
     }); 
     if(response.data.code == 1){
      setBlogs(response.data.res);
     }

    }catch(err){
    console.log(err);
    }
    
  }

  

  useEffect(()=>{
  fetchCategoryBlogs();
  },[])
  
  return (
    <div>
        <h3 className='text-center'>{cat}</h3>
     
         {blogs.length == 0 && 
         <div style={{margin:30}}>
          <Loader />
          </div>
         
         }
        <div className='card-slider-container'>
           
         {blogs.length !== 0 &&
         blogs.map((blog,index) =>{
          return(
            <BlogCard 
            id={blog.blog_id}
            width="100px"
            title={blog.blog_title}
            img_url={blog.blog_img_url}
            author_id={blog.usr_id}
            />  
          )
         })
       
         }  

    </div>   

    </div>

  )
}

export default BlogCategory