import React,{useState} from 'react';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import {Route,Switch} from 'react-router-dom';

function App() {

  return (
    <>
    
    <Navbar/>
    <Switch>
    <Route path='/signin' exact component={SignIn}/>
    </Switch>
   
    </>
  );
}

export default App;
