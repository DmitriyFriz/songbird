import React from 'react';

// style
import './AnswerItems.scss';

const AnswerItems = ({group, onSelectItem}) => {

  const answers = group.map(({name, id, answer}) => {
    let dotClazz = 'answers__dot';

    if ( answer !== null) {
      const addedClazz = answer ? ' correct' : ' incorrect';
      dotClazz += addedClazz;
    }

    return (
      <li
        className="answers__item"
        key={id}
        onClick={() => onSelectItem(id)}>
        <span className={dotClazz}></span>
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
