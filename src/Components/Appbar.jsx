import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Link, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Appbar({drawerWidth,setNoneOrBlock,setPerOrVar}) {
  return (
    <AppBar position="static" sx={{ width:{sm: `calc(100% - ${drawerWidth}px)`}, ml: {xs:0,sm:`${drawerWidth}px`} }}>
      <Toolbar>

        <IconButton sx={{display:{sm:"none"}}}  onClick={()=>{
       setPerOrVar("temporary");  
        setNoneOrBlock("block");
          
        }}>
        <Menu/>
        </IconButton>
        <Link  sx={{ flexGrow: 1 ,textAlign:"left" ,fontSize:"20px",fontStyle:"italic"}} href="/" color="inherit" underline='none' >
        My expenses
        </Link>
        <Typography>Mai mohamed</Typography>
        <Avatar sx={{ml:1}}  alt="mai" src=""/>


      </Toolbar> 
      
    </AppBar>


  )
}
