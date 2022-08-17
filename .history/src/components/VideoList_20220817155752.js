import React from "react";

import  {Grid } from '@material-ui/core'

import VideoItem from './VideoItem'

const VideoList = (props) => {
  const listOfVideos = videos.map((video) => <VideoItem/>)
  return (
 <h1>Video list</h1>
  )
}

export default VideoList;