import React,{useEffect,useState} from 'react';
import {Container,CardContent,Typography,CardActions,Button,Card,Grid,Backdrop,CircularProgress} from '@mui/material';
import {Link, withRouter } from 'react-router-dom'
import axios from 'axios';


const ProfileCard = ({user})=>(
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
         Name: {user.name}
        </Typography>
        <Typography variant="body2">
          User Name : {user.username}
        </Typography>
        <Typography variant="body2">
          Email: {user.email}
        </Typography>
        <Typography variant="body2">
          Phone: {user.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/posts`}>Go to Posts</Link>></Button>
      </CardActions>
    </Card>
  );

function User (props){
    const [user,setUsers]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`).then(res=>{
            setUsers(res.data);
            setIsloading(false);
    })
    },[])

    return(
        <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
       <Container maxWidth='sm' sx={{marginTop:"20px"}}>
          <Grid container direction='column' spacing={3}>
             <Grid item><ProfileCard key={user.id} user={user} /></Grid> 
          </Grid>
       </Container>
       </>
    )
}

export default withRouter(User);