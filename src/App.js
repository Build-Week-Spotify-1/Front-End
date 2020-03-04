import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import EditProfile from "./components/EditProfile";
import SongSuggestionsPage from "./components/SongSuggestionsPage";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#99FF8A"
          },
          secondary: {
            main: "#6E8B3D"
          }
        },
        typography:{}
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <img src="../spotify.jpg"/>
     
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
    </ThemeProvider>
  );
}

export default App;
