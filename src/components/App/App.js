import React from 'react';

// components
import Header from '../Header/Header';
import Game from '../Game/Game';
import Finish from '../Finish/Finish';

// services
import {getGroup, getItemById, getRandomItem, getMaxGroup} from '../../services/dataService'

// style
import './App.scss'

// audio
import correctAudio from '../../assets/audio/correct.mp3';
import incorrectAudio from '../../assets/audio/incorrect.mp3';

class App extends React.Component {

  maxGroup = getMaxGroup();

  state = {
    ...this.setRoundParameters(0),
    score: 0,
    finish: false
  }

  setRoundParameters(groupNumber) {
    return {
      group: getGroup(groupNumber),
      questionItem: getRandomItem(groupNumber),
      selectedItem: null,
      guessed: false,
      groupNumber
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
    this.changeScore();
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

  changeScore = () => {
    this.setState(({score, group}) => {
      const roundScore = group.filter(({ answer }) => answer === null).length;
      return {
        score: score + roundScore
      }
    })
  }

  playAudio(src) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `${src}`;
    audio.play();
  }

  onClickNext = () => {
    const { guessed, groupNumber } = this.state;
    if ( !guessed ) return;

    const nextGroupNumber = groupNumber + 1;
    if (nextGroupNumber >= this.maxGroup) {
      this.finishGame();
      return;
    }

    this.setState({...this.setRoundParameters(nextGroupNumber)});
  }

  finishGame = () => {
    this.setState({
      ...this.setRoundParameters(0),
      finish: true,
    });
  }

  onRepeat = () => {
    this.setState({
      score: 0,
      finish: false
    })
  }

  render() {
    const { score, groupNumber, finish } = this.state;

    const main = finish ?
      <Finish
        score={score}
        onRepeat={this.onRepeat} /> :
      <Game
        data={this.state}
        onSelectItem={this.onSelectItem}
        onClickNext={this.onClickNext} />

    return (
      <div className="app-container">
        < Header
          groupNumber={groupNumber}
          score={score} />
        {main}
      </div>
    )
  }
}

export default App;
