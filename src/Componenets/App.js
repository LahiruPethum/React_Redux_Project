import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Custormers from "./Pages/Custormers";
import DashBoard from "./Pages/DashBoard";
import Employees from "./Pages/Employees";
import Inventory from "./Pages/Inventory/Inventory";
import Settings from "./Pages/Settings";



function App() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Router>
            <Header />
          </Router>
        </Grid>
        <br></br>
        <Grid item xs={2}>
          <Router>
            <NavBar />
            
          </Router>
        </Grid>
        <br></br>
        <Grid item xs={10}>
          
        <Router>
            
            <Inventory/>
          </Router>
        
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
