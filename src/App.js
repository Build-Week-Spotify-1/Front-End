import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
     
      <Route exact path="/">
        <SignIn/>
      </Route>
      <Route exact path="/SignUp">
        <SignUp/>
      </Route>
    </div>
  );
}

export default App;
