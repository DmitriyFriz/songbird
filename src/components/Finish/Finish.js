import React from 'react';

// services
import { getMaxScore } from '../../services/dataService';

// style
import './Finish.scss';

const Finish = ({ score, onRepeat }) => {
  const maxScore = getMaxScore();

  return (
    <div className="finish">
      <p className="finish__congratulation">Поздравляем!</p>
      <p className="finish__score">Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
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
