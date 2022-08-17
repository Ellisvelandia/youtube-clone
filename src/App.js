import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail } from "./components/index";
// import { VideoList } from "./components/VideoList";

import youtube from "./api/youtube";

class App extends React.Component {
handleSubmit = async (searchTerm) => {
const response = await youtube.get('search', {params: {q: searchTerm}});
    
    console.log(response);
  }
  

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
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
