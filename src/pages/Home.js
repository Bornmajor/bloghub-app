import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogCategory from '../components/BlogCategory'
import blogapi from '../api/blogapi'

const Home = () => {

  return (
    <>
  
    <div className='layout_top'>

      <div className="featured-blogs">

        <BlogCard 
         id="1"
        title="How to create website within 5 minutes"
        img_url="https://s3-alpha.figma.com/hub/file/3236068850/252ed11c-029b-409d-b941-19315fb702cd-cover.png"
           
        />

      </div>

      <div className="sideload-blogs">

        <div className="sideload-first-layer">
         
        <BlogCard 
           id="2"
        addClass="sideload-card"
        title="100 Days of Code – A Complete Guide For Beginners and Experienced"
        img_url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201216211829/100-Days-of-Code-%E2%80%93-A-Complete-Guide-For-Beginners-and-Experienced.jpg"
        
        />

        
       <BlogCard 
          id="3"
         addClass="sideload-card"
        title="Must Do Coding Questions for Product Based Companies"
        img_url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210127175547/Must-Do-Coding-Questions-for-Product-Based-Companies.png"
         
        />

        </div>

        <div className="sideload-second-layer">
         
         <BlogCard 
         id="4"
         addClass="sideload-card"
         title="WHAT’S NEW FOR AFRICAN TRAVEL IN 2024"
         img_url="https://cdn-images.go2africa.com/wp-content/uploads/2023/12/29095203/Serengeti-Explorer-Public-Spaces_resized.jpg"        
         />
 
         
        <BlogCard 
         id="5"
         addClass="sideload-card"
         title="8 Expert Tips for Staying Safe in a Blizzard"
         img_url="https://images.everydayhealth.com/images/healthy-living/ways-to-stay-safe-in-a-blizzard-alt-1440x810.jpg?w=1110"      
         />
 
         </div>

      
      </div>

    </div>

    <BlogCategory cat="Technology" id="1"/>
    <BlogCategory cat="Travel" id="2"/>
    <BlogCategory cat="Health and wellness" id="3"/>
    <BlogCategory cat="Lifestyle" id="4"/>
    <BlogCategory cat="Finance" id="5"/>
    <BlogCategory cat="Food and Cooking" id="6"/>
    <BlogCategory cat="Entertainment" id="7"/>



    {/* <BlogCategory cat="Science" id="2"/>
    <BlogCategory cat="Education" id="3"/> */}

    </>
  )
}

export default Home