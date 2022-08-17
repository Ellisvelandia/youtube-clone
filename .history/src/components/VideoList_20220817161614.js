import React from 'react'

import { Grid } from '@material-ui/core'

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} />)

  return (
    <Grid contaienr>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList
