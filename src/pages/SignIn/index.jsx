import React,{Component} from 'react';
import {Grid,Box,Container,Button,TextField} from '@mui/material';
import {withRouter} from 'react-router-dom';

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.State={password:'',username:''}
       
    }

  handleChanges=(event)=>{
      this.setState({[event.target.name]:event.target.value})

  }

  handleSubmit=()=>{
    window.localStorage.setItem('username',this.state.username);
    window.localStorage.setItem('password',this.state.password);
    window.localStorage.setItem('isLoggedIn',true);
    window.location='/'
  }
    render(){
        return(
            <>
            <Container maxWidth="sm">
            <h2 align="center"> Sign in to continue</h2>
                <Box>
                    <Grid container spacing={3} direction="column" justify="center" alignItems='center' alignContent='center' sx={{ marginTop:'10vh' }}>
                        <Grid item>
                          <TextField
                            id="username"
                            label="username"
                            name='username'
                            onChange={this.handleChanges}
                            />
                        </Grid>
                        <Grid item>
                        <TextField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        onChange={this.handleChanges}
                        />
                        </Grid>
                        <Grid item><Button variant="contained" color='primary' onClick={this.handleSubmit}>Sign in</Button></Grid>
                    </Grid>
                </Box>
            </Container>
        </>
        )
    }

}


export default withRouter(SignIn);