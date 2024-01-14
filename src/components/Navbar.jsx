import React from 'react'
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material"
import { DrawerComponent } from './DrawerComponent'
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

export const Navbar = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const LoginDialog = ({ open, onClose }) => {

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={onClose}>Cancel</Button> */}
          <Button variant="contained"
           style={{ margin: "auto",backgroundColor:"#212B36" }} onClick={onClose}>Login</Button>
        </DialogActions>
      </Dialog>
    );

  };

  return (
    <AppBar style={{
      borderBottom: "1.5px ridge",
      boxShadow:"none",
      position: 'sticky',
      top: 0,    /* Stays at the top of the viewport */
      zIndex: 100, /* Ensure it stays above other elements */
      backgroundColor: "rgba(249,249,251,0.9)",
    }}  >
      <Toolbar style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DrawerComponent />
        <Stack spacing={1}>  {/*login functionality*/}

          <Button size="large" onClick={() => setOpenLoginDialog(true)}>
            <Typography color='#201E23' variant='body2'>
              Login
            </Typography>
          </Button>

          {openLoginDialog &&
            <LoginDialog
              open={openLoginDialog}
              onClose={() => setOpenLoginDialog(false)}
            />
          }

        </Stack>
      </Toolbar>
    </AppBar>


  );
}



