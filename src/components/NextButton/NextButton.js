import React from 'react';

// style
import './NextButton.scss';

const NextButton = ({ guessed }) => {

  let clazz = 'next-button';
  if (guessed) {
    clazz += ' active'
  }

  return (
    <button
      className={clazz}
      type="button"
      onClick={() => console.log('click')} >
      Next Level
    </button>
  )
}

export default NextButton;
