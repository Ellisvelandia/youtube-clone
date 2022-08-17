import React from 'react'
import './App.css'
import { Grid } from '@material-ui/core'
import { SearchBar, VideoDetail } from './components/index'
// import { VideoList } from "./components/VideoList";

import youtube from './api/youtube'

class App extends React.Component {
state = {
viddeo:[],
selectVideo: null,
}

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDl2X74Rpo-B0Jq_4z35Cc5ALqdhCuyzB4',
        q: searchTerm
      }
    })
  }

  render () {
    return (
      <Grid justify='center' container spacing={10}>
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
    )
  }
}

export default App
