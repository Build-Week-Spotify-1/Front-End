import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import EditProfile from "./components/EditProfile";
import SongSuggestionsPage from "./components/SongSuggestionsPage";
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
      <Route exact path="/DashBoard">
        <DashBoard/>
      </Route>
      <Route exact path="/EditProfile">
        <EditProfile/>
      </Route>
      <Route exact path="/SongSuggestionsPage">
        <SongSuggestionsPage/>
      </Route>
    </div>
  );
}

export default App;
