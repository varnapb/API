import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{
        background: 'rgb(255,231,208)',
        background: 'radial-gradient(circle, rgba(255,231,208,1) 0%, rgba(245,190,244,0.87718837535014) 100%)'
      }}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>My_API</Typography>
            <Link to='/api'>
                <Button color='info'>Api_User</Button>
            </Link>
            &nbsp;
            <Link to='/t'>
                <Button color='info'>Task</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>  
  )
}

export default Navbar
