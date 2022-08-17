import React from "react";
import "./App.css";
import { Grid } from "@mater";
IMPORT {SearchBar} from './components/Search'

import youtube from "./api/youtube";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={11}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
            </Grid>
            <Grid item xs={8}>
  {/* VIDEO DETAILS */}
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;