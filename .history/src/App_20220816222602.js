import React from "react";
import "./App.css";
import { Grid } from "@mater";
import { SearchBar } from "./components/SearchBar";
// import { VideoList } from "./components/VideoList";
import { VideoDetail } from "./components/VideoDetail";

import youtube from "./api/youtube";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={11}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SerachBar></SerachBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail></VideoDetail>
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
