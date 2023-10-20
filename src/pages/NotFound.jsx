import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
    const theme=useTheme();
  return (
    <Typography variant="h4" color={theme.palette.error.main}>

        not Found ,try again later
    </Typography>
  )
}
