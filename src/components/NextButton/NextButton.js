import React from 'react';

// style
import './NextButton.scss';

const NextButton = () => {

  return (
    <button
      className="next-button active"
      type="button"
      onClick={() => console.log('click')} >
      Next Level
    </button>
  )
}

export default NextButton;
