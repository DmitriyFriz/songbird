import React from 'react';

// AudioPlayer
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

// style
import './Player.scss';

class Player extends React.Component {

  player = React.createRef();

  componentDidUpdate(prevProps) {
    if ( this.props.guessed !== prevProps.guessed && this.props.guessed) {
      const audio = this.player.current.audio.current;
      audio.pause();
      audio.currentTime = 0;
    }
  }

  render () {
    const { src } = this.props;

    return (
      <AudioPlayer
        ref={this.player}
        src={src}
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        customAdditionalControls={[]}
        layout="horizontal-reverse"
      />
    )
  }
}

export default Player;
