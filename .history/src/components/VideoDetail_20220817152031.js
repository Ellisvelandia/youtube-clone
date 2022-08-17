import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>

  console.log(video)

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '70%' }}>
        <iframe
          frameborder='0'
          height='100%'
          width='100%'
          title='Video Player'
          src='videoSrc'
        />
      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <T></T>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail
