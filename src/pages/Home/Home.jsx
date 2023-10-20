

import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

export default function Home() {
  const [myData,setMyData]=useState([]);
  useEffect(() =>{
fetch('http://localhost:3000/myData').then((response) =>response.json())
.then((data)=>setMyData(data));
    
    

  } , [])

let totalPrice=0;


const deleteHandler=(item) => {
  fetch(`http://localhost:3000/myData/${item.id}`, {
    method: "DELETE"
  },);

  const newArr = myData.filter((myObject) => {
    return (
      myObject.id !== item.id
    )
  })
  setMyData(newArr);
}
  return (

<Box>

  {myData.map((item) => {
    totalPrice+=item.price;
    
    return(

      <Paper  key={item.id} sx={{ 
        
        position: "relative",
        width: "366px",
       display: "flex",
        justifyContent: "space-between", 
        mt: "22px", 
        pt: "27px",
         pb: "7px"
           }}>
        <Typography sx={{ml:"16px",fontSize:"1.3em"}} variant="h6" >{item.title}</Typography>
        <Typography sx={{mr:"33px",fontWeight:"500",fontSize:"1.4em",opacity:"0.8"}} variant="h6" >{item.price} $</Typography>


        <IconButton sx={{ position: "absolute", top: "0", right: "0" }} onClick={()=>{
          deleteHandler(item)
        }}>

          <Close sx={{fontSize:"20px"}} />
        </IconButton>

      </Paper>


    );
  }
  )}
    

<Typography mt="55px" variant='h6'>&#128073; you spend  ${totalPrice}</Typography>
  </Box>
  )
}
