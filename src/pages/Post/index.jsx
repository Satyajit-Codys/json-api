import React,{useEffect,useState} from 'react';
import {Container,CardContent,Typography,CardActions,Button,Card,Grid,Backdrop,CircularProgress} from '@mui/material';
import {Link } from 'react-router-dom'
import axios from 'axios';

const PostCard = ({post})=>(
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
         {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/user/${post.userId}`}>Author</Link></Button>
      </CardActions>
    </Card>
  );
function Post (){
    const [posts,setPosts]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts/').then(res=>{
           const authors={}
           const data=[]
           res.data.forEach(post=>{
            if(!authors[post.userId]){
                data.push(post)
                authors[post.userId]=true;            }
           })
           window.localStorage.setItem('posts',data);
        setPosts(data);
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
             {posts.map(post=>  <Grid item><PostCard key={post.id} post={post} /></Grid> )}
          </Grid>
       </Container>
       </>
    )
}

export default Post;