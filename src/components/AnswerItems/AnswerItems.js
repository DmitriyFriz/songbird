import React from 'react';

// style
import './AnswerItems.scss';

const AnswerItems = () => {

  const arr = ['Ворон', 'Ворон', 'Ворон', 'Ворон', 'Ворон', 'Ворон'];

  const answers = arr.map((item, index) => {
    return (
      <li className="answers__item" key={index}>
        <span className="answers__dot"></span>
        {item}
      </li>
    )
  })

  return (
    <div className="answers">
      <ul className="answers__list">
        {answers}
      </ul>
    </div>
  )
}

export default AnswerItems;
