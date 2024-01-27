import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogapi from '../api/blogapi';
import Loader from '../components/Loader';
const Blog = () => {
    const params = useParams();
    const [post,setPost] = useState([]);
    const [author,setAuthor] = useState("");

    const getBlog = async() =>{
      try{
      const response = await blogapi.post("blogs/view/",{
        blog_id: params.blogId
      })  
      if(response.data.code == 1){
        console.log(response.data.res);
        setPost(response.data.res);
        getBlogAuthor(response.data.res[0].usr_id);
        
      }

      }catch(err){
       console.log(err);
      }
    //params params.blogId
    }

    const getBlogAuthor = async(author_id) =>{
      try{
        const response = await blogapi.post('users/',{
         usr_id:author_id
        })
        if(response.data.code == 1){
        setAuthor(response.data.res[0].username);
        }
  
      }catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
     getBlog();
    },[])
  return (
    <div className="body-blog">
       {post.length !== 0 ?
      <div className="blog-page-container"> 
        <h1>{post[0].blog_title}</h1>  
        {author && <h3 className='text-muted'>By {author}</h3>  }
        

        <img
         src={post[0].blog_img_url}
         className="blog-body-img"
         width="100%" />

         <div className="blog-page-contet">
         {post[0].blog_content}
         </div>

        </div>:
        <Loader />
       }
        
    

    </div>
   
  )
}

export default Blog