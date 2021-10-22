import React,{useState} from 'react';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import {Route,Switch,Redirect} from 'react-router-dom';

function App() {
  const isloggedIn=window.localStorage.getItem('isLoggedIn');
  return (
    <>
    
    <Navbar/>
    <Switch>
    <Route path='/signin' exact component={SignIn}/>
    <Route path='/posts' exact component={()=> isloggedIn?  <Post />:<Redirect to="/signin" />}/>
    <Route path='/user/:id' exact component={()=> isloggedIn?  <Profile />:<Redirect to="/signin" />}/>
    <Route path='/' exact component={Homepage}/>
    </Switch>
   
    </>
  );
}

export default App;
