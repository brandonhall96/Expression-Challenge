import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import axios from 'axios';
import home from './components/home'
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';



const hitBackend = () => {
    axios.get('/test')
    .then((response) => {
    console.log(response.data)
    })
    }


function App() {
  return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path ='/' component={home} />
            

        </Switch>
        <Form />
        <Table />
        <Footer />
        


      
    </div>
  );
}


export default App;

