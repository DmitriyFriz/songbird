import React from 'react';

// components
import Question from '../Question/Question';
import AnswerItems from '../AnswerItems/AnswerItems';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';

// style
import './Game.scss';

const Game = ({data, onSelectItem, onClickNext}) => {
  const { group, questionItem, selectedItem, guessed } = data;

  return (
    <main>
      <Question
        questionItem={questionItem}
        guessed={guessed} />
      <div className="items-block">
        <AnswerItems
          group={group}
          onSelectItem={onSelectItem} />
        <Description selectedItem={selectedItem} />
      </div>
      <NextButton
        guessed={guessed}
        onClickNext={onClickNext} />
    </main>
  )
}

export default Game;
