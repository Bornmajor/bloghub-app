import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Root = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    // Scroll to the top whenever the user navigates to a new page
    window.scrollTo(0, 0);
  },[pathname])

  return (
   <>
   <NavBar />
   <Outlet />
   <Footer />
   </> 
  )
}

export default Root