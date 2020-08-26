import React from 'react';

// AudioPlayer
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

// style
import './Player.scss';

const Player = ({ src }) => {

  return (
    <AudioPlayer
      src={src}
      autoPlayAfterSrcChange={false}
    />
  )
}

export default Player;
