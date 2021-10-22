import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import {withRouter} from 'react-router-dom'

 function Navbar(props) {
    const isloggedIn=window.localStorage.getItem('isLoggedIn');
    function handleClick(flag){
        if(flag ==='Sign out'){
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');
            window.localStorage.removeItem('isLoggedIn');
        }
        if(!(props.location.pathname.includes('signin')&&flag==='Sign in')) window.location='/signin';
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Grid container justifyContent="space-between">
                <Grid item>
                    {isloggedIn?(
                    <Button  color="inherit">
                        Posts
                    </Button>):null
                    }</Grid>
                <Grid item>
                <Button onClick={()=> handleClick(isloggedIn? 'Sign out':'Sign in')} color="inherit">{isloggedIn? 'Sign out':'Sign in'}
                </Button>
                </Grid>
            </Grid>
        
                 </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default  withRouter(Navbar)
