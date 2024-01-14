import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Drawer, IconButton, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const DrawerComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <IconButton size='large' edge='start' color='#201E23' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>

        <Box sx={{ backgroundColor: "#F9FAFB",display: 'flex', justifyContent: 'space-between',alignItems:"center" }} p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6'>
            Menu
          </Typography>
          
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>

      </Drawer>

    </>

  )
}
