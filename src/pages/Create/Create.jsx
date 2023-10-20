import { Box, Button, InputAdornment, TextField, styled } from '@mui/material'
import { purple } from '@mui/material/colors';
import React, { useState } from 'react'
import '../Create/Create.css';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [title, setTitle] = useState("");
  const [price, setprice] = useState(0);

  const navigate=useNavigate();


  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


  return (

    <Box component="form" className='border' sx={{ width: "380px" }} >
      <TextField
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ width: '25ch', display: "block", margin: "22px auto" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled" />

      <TextField


        onChange={(event) => {
          setprice(Number(event.target.value));
        }}
        fullWidth={true}
        label="Amount"

        sx={{ width: '25ch', display: "block", margin: "22px auto" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton variant="contained" sx={{ mt: "15px" }} onClick={(params) => {

        fetch("http://localhost:3000/myData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, price })

        }).then(() => {
          navigate("/");
        }
        )
        
      }}>
        Subimt <KeyboardArrowRight />

      </ColorButton>
    </Box>

  )
}
