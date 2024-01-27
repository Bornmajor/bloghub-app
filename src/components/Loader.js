import React from 'react'
import logo from '../assets/images/camera.png' 
import { useContext } from 'react'
import MyContext from '../context/context'
const Loader =({message}) => {
  const {appTheme} = useContext(MyContext);


  
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
       {/* <image src={logo} width="150px" /> */}
       <i style={{fontSize:40,color:appTheme}} class="fas fa-spinner fa-spin"></i>
       <p style={{textAlign:'center',fontWeight:'600',fontSize:20}}>{message ? message : 'Loading' }</p>
    </div>
  )
}

export default Loader