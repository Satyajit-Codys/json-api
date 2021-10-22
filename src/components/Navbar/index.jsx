import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import {withRouter} from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }))
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

    function handleSearch(){
        
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Grid container justifyContent="space-between">
                <Grid item>
                    {isloggedIn?(
                    <Button onClick={()=> props.history.push('/posts')} color="secondary" variant="contained">
                        Posts
                    </Button>):null
                    }</Grid>
                    <Grid item>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        onChange={handleSearch}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    </Grid>
                <Grid item>
                <Button onClick={()=> handleClick(isloggedIn? 'Sign out':'Sign in')} color="secondary" variant="contained">{isloggedIn? 'Sign out':'Sign in'}
                </Button>
                </Grid>
            </Grid>
        
                 </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default  withRouter(Navbar)
