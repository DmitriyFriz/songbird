import React from 'react';

// components
import Header from '../Header/Header';
import Question from '../Question/Question';
import AnswerItems from '../AnswerItems/AnswerItems';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton'

// services
import {getGroup, getItemById, getRandomItem, getMaxGroup} from '../../services/dataService'

// style
import './App.scss'

class App extends React.Component {

  maxGroup = getMaxGroup();
  groupNumber = 0;

  state = {
    group: getGroup(this.groupNumber),
    randomItem: getRandomItem(this.groupNumber),
    selectedItem: null,
    guessed: false,
  }


  render() {
    const { group, randomItem, selectedItem, guessed } = this.state;
    console.log(randomItem);
    console.log(this.maxGroup);
    console.log(group)

    return (
      <div className="app-container">
        < Header />
        <Question
          randomItem={randomItem}
          guessed={guessed} />
        <div className="items-block">
          <AnswerItems />
          <Description />
        </div>
        <NextButton />
      </div>
    )
  }
}

export default App;
