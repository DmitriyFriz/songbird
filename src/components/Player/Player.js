import React from 'react';

// AudioPlayer
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

// style
import './Player.scss';

const Player = ({ src, guessed = false }) => {

  const player = React.createRef();
  console.log(player)

  if (guessed) {
    // const audio = player.current.audio.current;
    // audio.pause();
  }


  return (
    <AudioPlayer
      ref={player}
      src={src}
      autoPlayAfterSrcChange={false}
    />
  )
}

export default Player;
