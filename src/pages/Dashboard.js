import React, { useContext, useEffect, useState } from 'react'
import HorizontalCard from '../components/HorizontalCard'
import blogapi from '../api/blogapi'
import MyContext from '../context/context'
import Loader from '../components/Loader'

const Dashboard = () => {

  const {userToken} = useContext(MyContext);
  const [blogs,setBlogs] = useState([]);
  const [n,setN] = useState("")

    const deleteBlog = async(id) =>{
    try{
     const response = await blogapi.post('blogs/delete/',{
      blog_id:id,
      usr_token:userToken
     });
     if(response.data.code == 1){
      setN("Ok");//reloads getUserBlogs()
     }

    }catch(err){
      console.log(err);
    }
    }

    const getUsersBlogs = async() =>{
      try{
      const response = await blogapi.post('blogs/view/',{
      usr_token:userToken
      });

      if(response.data.code == 1){
      setBlogs(response.data.res);  
      setN("oK");
      
      }

      }catch(err){
       console.log(err);
      }
    }

    useEffect(()=>{
    getUsersBlogs();
    },[n])
  return (
    <div className="dashboard-container">
        <div className="dash-inner-container">
          {blogs.length !== 0 ?
          blogs.map((item,index) =>{
            return (
              <HorizontalCard 
              id={item.blog_id}
              title={item.blog_title}
              img_url={item.blog_img_url}
               
              deleteCard={() => deleteBlog(item.blog_id)} />  
            )
          })

          :  
          <Loader />
        
          }


{/*            
           <HorizontalCard deleteCard={() => deleteBlog(1)} />   */}
        </div>

       
    </div>
  )
}

export default Dashboard