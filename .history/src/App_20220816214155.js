import React from "react";
import "./App.css";
import { Grid } from "@mater";

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
  VIDEO
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
