import React from 'react';

// AudioPlayer
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

// style
import './Player.scss';

const Player = () => {

  return (
    <AudioPlayer
      src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
      autoPlayAfterSrcChange={false}
    />
  )
}

export default Player;
