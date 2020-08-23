import React from 'react';

// style
import './Question.scss';

//Player
import Player from '../Player/Player';

//image
import unknownImage from '../../image/unknown.jpg';

class Question extends React.Component {

  render() {
    return (
      <div className="question">
        <img className="question__img" src={unknownImage} alt="unknown" />
        <div className="question__info">
          <p className="question__name">******</p>
          <div><Player /></div>
        </div>
      </div>
    )
  }

}

export default Question;
