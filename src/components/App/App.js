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

// audio
import correctAudio from '../../assets/audio/correct.mp3';
import incorrectAudio from '../../assets/audio/incorrect.mp3';

class App extends React.Component {

  maxGroup = getMaxGroup();
  groupNumber = 0;

  state = {
    ...this.setRoundParameters(this.groupNumber),
    score: 0
  }

  setRoundParameters(groupNumber) {
    return {
      group: getGroup(groupNumber),
      questionItem: getRandomItem(groupNumber),
      selectedItem: null,
      guessed: false,
    }
  }

  onSelectItem = (id) => {
    const { group, guessed } = this.state;

    const item = getItemById(group, id);

    this.setState({selectedItem: item});

    if (!guessed) {
      this.handleAnswer(item);
    }
  }

  handleAnswer = (item) => {
    const { questionItem } = this.state;

    if ( questionItem === item) {
      this.handleCorrect(item);
    } else {
      this.handleIncorrect(item);
    }
  }

  handleCorrect = (item) => {
    this.setState({guessed: true});
    this.playAudio(correctAudio);
    this.setItemAnswer(item, true);
  }

  handleIncorrect = (item) => {
    this.playAudio(incorrectAudio);
    this.setItemAnswer(item, false);
  }

  setItemAnswer = (item, boolean) => {
    if (item.answer !== null) {
      return;
    }

    this.setState(({group}) => {
      const idx = group.findIndex((el) => el === item );
      const newItem = {...item, answer: boolean}

      const newGroup = [
        ...group.slice(0, idx),
        newItem,
        ...group.slice(idx + 1)
      ]

      return {
        group: newGroup,
      }
    })
  }

  playAudio(src) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `${src}`;
    audio.play();
  }

  render() {
    const { group, questionItem, selectedItem, guessed, score } = this.state;

    return (
      <div className="app-container">
        < Header
          groupNumber={this.groupNumber}
          score={score} />
        <Question
          questionItem={questionItem}
          guessed={guessed} />
        <div className="items-block">
          <AnswerItems
            group={group}
            onSelectItem={this.onSelectItem} />
          <Description selectedItem={selectedItem} />
        </div>
        <NextButton guessed={guessed}/>
      </div>
    )
  }
}

export default App;
