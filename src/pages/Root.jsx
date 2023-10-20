import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Appbar from '../Components/Appbar';
import Drawerr from '../Components/Drawerr';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
 
const drawerWidth = 240;
export default function Root() {


  const[theme,setTheme]=useState("light");

  const[none,setNoneOrBlock]=useState("none");
  const[permanent,setPerOrVar]=useState("permanent");


  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <>

<Appbar drawerWidth={drawerWidth} setNoneOrBlock={setNoneOrBlock} setPerOrVar={setPerOrVar} />
    
 <Drawerr drawerWidth={drawerWidth} setTheme={setTheme} setNoneOrBlock={setNoneOrBlock} setPerOrVar={setPerOrVar}  permanent={permanent} none={none}/>


 <Box component="main"
        sx={{
          ml: {sm:`${drawerWidth}px`},
          display: 'flex',
          justifyContent: 'center',
          mt:"66px"
        }}
      >
        <Outlet />

      </Box>
      </>

          </ThemeProvider>

  )
}
