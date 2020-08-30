import React from 'react';

// style
import './Question.scss';

//Player
import Player from '../Player/Player';

//image
import unknownImage from '../../assets/image/unknown.jpg';

class Question extends React.Component {

  componentDidMount() {
    console.log(this.props.questionItem.name);
  }

  componentDidUpdate(prevProps) {
    if( this.props.questionItem !== prevProps.questionItem ) {
      console.log(this.props.questionItem.name);
    }
  }


  render () {
    const { questionItem, guessed } = this.props;
    const { name, image, audio } = questionItem;

    const currentName = guessed ? name : '******';
    const currentImage = guessed ? image : unknownImage;

    return (
      <div className="question">
        <img className="question__img" src={currentImage} alt="unknown" />
        <div className="question__info">
          <p className="question__name">{currentName}</p>
          <div><Player src={audio} guessed={guessed} /></div>
        </div>
      </div>
    )
  }
}

export default Question;
