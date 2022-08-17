import React from 'react'

import { Grid } from '@material-ui/core'

import VideoItem from './VideoItem'

const VideoList = ({vi}) => {
  
  const listOfVideos = videos.map(video => <VideoItem />)
  
  return listOfVideos;

}

export default VideoList
