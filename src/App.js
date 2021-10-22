import React,{useState} from 'react';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Post from './pages/Post';
import {Route,Switch,Redirect} from 'react-router-dom';

function App() {
  const isloggedIn=window.localStorage.getItem('isLoggedIn');
  return (
    <>
    
    <Navbar/>
    <Switch>
    <Route path='/signin' exact component={SignIn}/>
    <Route path='/posts' exact component={()=> isloggedIn?  <Post />:<Redirect to="/signin" />}/>
    </Switch>
   
    </>
  );
}

export default App;
