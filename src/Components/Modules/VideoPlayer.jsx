


import React from 'react';
import ReactPlayer from 'react-player/youtube';

function VideoPlayer(props) {

  return (

    <ReactPlayer
      url={props.video}
      controls={true}
      playing={false}
      styled={'border-radius:15px;width:90%;'}
    />

  )

}

export default VideoPlayer;
