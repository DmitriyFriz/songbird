import React from 'react';

// style
import './AnswerItems.scss';

const AnswerItems = ({group, onSelectItem}) => {

  const answers = group.map(({name, id}) => {
    return (
      <li
        className="answers__item"
        key={id}
        onClick={() => onSelectItem(id)}>
        <span className="answers__dot"></span>
        {name}
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
