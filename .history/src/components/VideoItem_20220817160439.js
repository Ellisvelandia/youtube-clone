import React from 'react'

import  {Grid, Paper , Typography} from '@material-ui/core'

const VideoItem = ({video}) => {
  return (
    <Grid item xs={12}>
      <Paper style={{display: 'flex', alignItems: 'center'}}>
      <img style={{marginRight: '20px'} alt="thumbnail" src={}}/>
      </Paper>
    </Grid>
  )
}


export default VideoItem;