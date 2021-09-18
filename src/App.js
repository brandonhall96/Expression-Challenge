import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import axios from 'axios';
import home from './components/home'
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Footer from './components/Footer';

const hitBackend = () => {
    axios.get('/test')
    .then((response) => {
    console.log(response.data)
    })
    }


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path ='/' component={home} />

        </Switch>
        <Footer />
        


        
   
        
  
       
      
    </div>
  );
}

export default App;

