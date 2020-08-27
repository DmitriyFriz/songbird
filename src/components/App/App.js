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
    ...this.setParameters(this.groupNumber),
    score: 0
  }

  setParameters(groupNumber) {
    return {
      group: getGroup(groupNumber),
      questionItem: getRandomItem(groupNumber),
      selectedItem: null,
      guessed: false,
    }
  }

  onSelectItem = (id) => {
    this.setState({selectedItem: getItemById(this.groupNumber, id)});

    const { guessed } = this.state;

    if (!guessed) {
      this.handleAnswer(id);
    }
  }

  handleAnswer = (idAnswer) => {
    const { id } = this.state.questionItem;

    if (id === idAnswer) {
      this.handleCorrect();
    } else {
      this.handleIncorrect();
    }
  }

  handleCorrect = () => {
    this.setState({guessed: true});
    this.playAudio(correctAudio);
  }

  handleIncorrect = () => {
    this.playAudio(incorrectAudio);
  }

  playAudio(src) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `${src}`;
    audio.play();
  }

  render() {
    const { group, questionItem, selectedItem, guessed } = this.state;

    return (
      <div className="app-container">
        < Header groupNumber={this.groupNumber}/>
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
