import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const ProfileDropdown = () => {
  return (
    <div className='dropdown-profile' >
       
    <NavDropdown title={"Ozzy"} id="basic-nav-dropdown" >
        <NavDropdown.Item href="action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="action/3.4">
         Logout
        </NavDropdown.Item>
   </NavDropdown>

  </div>
  )
}

export default ProfileDropdown