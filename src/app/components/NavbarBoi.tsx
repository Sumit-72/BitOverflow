import React from 'react'
import { Button } from '@mui/material'
const NavbarBoi = () => {
  return (
    <div className='sticky top-0 text-center left-0 right-0 bg-blue-400 p-5'>
      Navbar bakchod hai
      <Button color="secondary">Home</Button>
      <Button color="secondary">Questions</Button>
      <Button color="secondary">Profile</Button>
      <Button color="secondary">Login/Signup</Button>
    </div>

  )
}

export default NavbarBoi