import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const HorizontalCard = ({deleteCard,id,title,img_url}) => {
    
    const navigate = useNavigate();
    
  return (
    <div className='horizontal-blog-card' key="">
        <div className="horizontal-blog-img">
            <img src={img_url}  />
        </div>
        
        <div className="horizontal-blog-title">
             {title}
        </div>

        <div className="horizontal-blog-actions">
             <Link style={{color:'black'}} className='horizontal-btn' title='edit ' to={`/blogs/edit/${id}`}><i class="fas fa-pen"></i></Link>
            <span className='horizontal-btn ' title='delete' onClick={() => deleteCard(id)}><i class="fas fa-times"></i></span>
           
        </div>

    </div>
  )
}

export default HorizontalCard