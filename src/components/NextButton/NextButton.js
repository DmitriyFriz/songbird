import React from 'react';

// style
import './NextButton.scss';

const NextButton = ({ guessed, onClickNext }) => {

  let clazz = 'next-button';
  if (guessed) {
    clazz += ' active'
  }

  return (
    <button
      className={clazz}
      type="button"
      onClick={onClickNext} >
      Next Level
    </button>
  )
}

export default NextButton;
