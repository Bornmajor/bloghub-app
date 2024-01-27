import React from 'react';
import me from '../assets/images/me.jpg'
import { Button } from 'react-bootstrap';
import MyContext from '../context/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const {uiTheme} = useContext(MyContext);


  return (
    
    <div  className="blog-about-container">
      <div className="blog-about-content">
      <h1>Welcome to BlogHub</h1>

      

      <div className="blog-about-article-section">

       <h2>About Us</h2> 
      BlogHub, a creative haven for bloggers of all genres, was launched in 2023 
      with a vision to empower individuals and communities through the art of storytelling. 
      Whether you're a seasoned wordsmith or just dipping your toes into the blogging world,
      BlogHub is your go-to platform for expressing your thoughts, ideas, and passions.
      </div>

      <div  className="blog-about-article-section">

      <h2>Our Mission</h2>
  
      At BlogHub, we believe in the power of words to connect, inspire, and transform.
      Our mission is to provide a dynamic and user-friendly space 
      where bloggers can unleash their creativity and build a community around shared interests.
       We're committed to fostering a diverse and inclusive environment that encourages exploration, learning, and collaboration.
      </div>

      <div className="blog-about-article-section">

      <h2>What Sets Us Apart</h2>
      <ul className='about-listed-cotent'>
        <li>
        <span className="important-title">Versatility</span> : BlogHub caters to a wide range of genres, from travel and lifestyle to technology and beyond. Whatever your niche, there's a place for you here.
        </li>
        <li> <span className="important-title">User-Friendly Interface</span> : We understand that your focus should be on crafting compelling content, not navigating a complex platform. Our user-friendly interface ensures a seamless blogging experience.</li>
        <li>  <span className="important-title">Community Building</span>: Blogging is not just about publishing; it's about connecting with like-minded individuals. BlogHub facilitates community building through comments, forums, and social sharing features. </li>     
       
      </ul>
      
    
      </div>

      <div className="blog-about-article-section">

      <h2>Why Choose BlogHub?</h2>

      <ul className='about-listed-cotent'>
       <li> <span className="important-title">Creativity Unleashed</span> : Express yourself freely with our intuitive blogging tools, allowing you to focus on your content while we handle the technicalities.</li> 
       <li> <span className="important-title">Built for Community</span> : Join a vibrant community of bloggers and readers who share your interests. Connect, engage, and grow together.</li>
       <li><span className="important-title">Innovation at Its Core</span>  : We're committed to staying at the forefront of technology, bringing you the latest features to enhance your blogging experience. </li>
      </ul>

      <div className="blog-about-article-section">
      <h2>Meet the Founder </h2>

      <div className="about-author-section">
        <img src={me} width="250px" />

        <div className="about-author-content">
        <h3 className="important-title">Osborn Maja</h3>
        BlogHub was founded by Osborn Maja, an expert in web development from Majasociet Software Solutions.
        With a passion for creating user-friendly and innovative platforms, 
         Osborn envisioned BlogHub as a space where bloggers could thrive and connect. 
        His expertise in web development ensures that BlogHub remains at the cutting edge of technology, providing users with a seamless and enjoyable blogging experience.
        </div>
      </div>

     
      <h3>Get Started Today</h3>
      Ready to embark on your blogging journey? Join BlogHub and become part of a thriving community where your voice matters. Whether you're a seasoned blogger or just starting, BlogHub welcomes you to a world of endless possibilities.
      </div>

      <div className="blog-about-article-section">
       Join BlogHub and start shaping your narrative today! 
        <br/>
      <Link to="/account?mode=register"  className="btn myBtn my-2" style={{backgroundColor:uiTheme}}>Get started</Link>
      </div>

      
     

      

     
      </div>


      </div>
      


    </div>
  )
}

export default About