import React from 'react';

// services
import { getMaxScore } from '../../services/dataService';

// style
import './Finish.scss';

//image
import cup from '../../assets/image/cup.svg';

// audio
import successAudio from '../../assets/audio/success.mp3';

const Finish = ({ score, onRepeat }) => {
  const maxScore = getMaxScore();

  let result = <p className="finish__score">Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>

  const winResult = <div>
    <p className="finish__score">Вы угадали всё с первой попытки!</p>
    <img className="finish__cup" src={cup} alt="cup" />
  </div>

  if ( maxScore === score ) {
    result = winResult;
    playAudio(successAudio);
  }

  function playAudio(src) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `${src}`;
    audio.play();
  }

  return (
    <div className="finish">
      <p className="finish__congratulation">Поздравляем!</p>
      {result}
      <button
        className="finish__button"
        type="button"
        onClick={onRepeat} >
        Попробовать еще раз
      </button>
    </div>
  )
}

export default Finish;
