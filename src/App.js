import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'

import ToDoApp from './todo-app/ToDoApp'
import Home from './home/Home'
import './App.css';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">

      <div className="header">
        <div className="logo-container">
          <NavLink activeClassName="active" exact  to="/" >
            <img className="logo" style={{"width": "100px"}} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header-title"><strong>React Sample Apps</strong></div>
      </div>

      <ul className="menu-items">
        <li><NavLink activeClassName="active" exact  to="/" >Home</NavLink></li>
        <li><NavLink activeClassName="active" exact  to="/todo-app" >To Do App</NavLink></li>
      </ul>


      <Switch>

        {/* 
        ****************
        *** Method 1 ***
        ****************
        
        This mehtod does not give acccess to "props"


        <Route path="/todo-app">
          <ToDoApp />
        </Route>
        <Route path="/">
          <Home />
        </Route> 

        */}

        {/* 
        ****************
        *** Method 2 ***
        ****************
        
        This mehtod does not give acccess to "props" too
        
        
        <Route path="/todo-app" render={ () => <ToDoApp /> } />
        <Route path="/" render={ () => <Home /> } /> 

        */}

        {/*  
        ****************
        *** Method 3 ***
        ****************
        */}

  
          <Route path="/todo-app" component={ToDoApp} />
          <Route path="/" component={Home} />

      </Switch>
      
    </div>
  );
}

export default App;
