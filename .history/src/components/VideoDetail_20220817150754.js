import React from "react";

import  { Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {

  if(!video) return <div>Loading...</div>

  console.log()

  const videosrc = `https://www.youtube.com/embed/${}`


  return (
    <React.Fragment>
      <Paper elevation={6} style={{height: '70%'}}>
       <iframe frameborder="0" height="100%" width="100%" title="Video Player" src="..."/>
      </Paper>
      <Paper elevation={6} style={{padding: '15px'}}>

      </Paper>
    </React.Fragment>
   )
};

export default VideoDetail;
