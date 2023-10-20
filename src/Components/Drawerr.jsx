import {  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7, Edit, Home, Logout, Person, Settings } from '@mui/icons-material';
import { useTheme } from '@emotion/react';


export default function Drawerr({drawerWidth ,setTheme,setPerOrVar,setNoneOrBlock,none,permanent}) {
    const navigate = useNavigate();
    const theme = useTheme();
    const location=useLocation();
    const myList=[
      {text:"Home",icon:<Home/>,path:"/"},
      {text:"Create",icon:<Edit />,path:"/create"},
      {text:"Profile",icon:<Person />,path:"/profile"},
      {text:"Logout",icon:<Settings/>,path:"/settings"}
    ]

  return (

      <Drawer
        sx={{ 
          display:{xs:none,sm:"block"},
          width: `${drawerWidth}px`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}px`,
            boxSizing: 'border-box',
          },
        }}
        variant = {permanent}
        anchor="left"
        open={true}
        onClose={()=>{
          setPerOrVar("permanent")
          setNoneOrBlock("none")
        }}
      >

        <List>

        <ListItem sx={{display:"flex" , justifyContent:"center"}}>

          <IconButton sx={{ ml: 1 }} onClick={() => {
          setTheme(theme.palette.mode === "light" ?"dark":"light");
        }} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 sx={{color:"orange"}} /> : <Brightness4 />}
      </IconButton>
        </ListItem>

        


        <Divider />

        {myList.map((item)=>{ 
          return(
            <ListItem  key={item.text} disablePadding sx={{backgroundColor: location.pathname===item.path? "lightgrey" :null}}>
            <ListItemButton onClick={()=>{
                navigate(item.path);
            }} >
              <ListItemIcon>
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>

          )
        })}


       

         













          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                navigate('/logout');
            }}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
    
    
  )
}
