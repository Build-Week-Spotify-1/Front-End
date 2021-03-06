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
            main: "#43FFD2"
          },
          secondary: {
            main: "#43FFD2"
          }
        },
        typography:{}
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
    <div className="App">

      <Route exact path="/">
        <SignIn/>
      </Route>
      <Route exact path="/SignUp">
        <SignUp/>
      </Route>
      <Route exact path="/DashBoard" render={ ( props ) => 
       <DashBoard 
       //{...props} setSongList={setSongList} songList={songList}
       /> }>
        
      </Route>
      <section className="Edit-Profile">
      <Route exact path="/EditProfile">
        <EditProfile/>
      </Route>
      </section>
      <Route exact path="/SongSuggestionsPage">
        <SongSuggestionsPage/>
      </Route>
    </div>
    </ThemeProvider>
  );
}

export default App;
