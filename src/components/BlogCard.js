import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import blogapi from '../api/blogapi';

const BlogCard = ({width,title,author_id,img_url,link,addClass,id}) => {
   const [author,setAuthor] = useState("");

  const getBlogAuthor = async() =>{
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
    getBlogAuthor();
  },[]);

  return (
    <Card style={{ width: width }} className={"blog-card " + addClass }>
    <Link to={"/blog/"+id} className="linked_card">
    <Card.Img variant="top" src={img_url} />
    <Card.Body>
        <Card.Title className="blog-card-title">{title}</Card.Title>
        {author && 
          <Card.Text className='text-muted blog-card-author'>
            By {author}
        </Card.Text>
        }
      
    </Card.Body>    
    </Link>
   
  </Card>
  )
}

export default BlogCard;