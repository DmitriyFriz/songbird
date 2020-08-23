import React from 'react';

// components
import Header from '../Header/Header';
import Question from '../Question/Question';
import AnswerItems from '../AnswerItems/AnswerItems';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton'

// style
import './App.scss'

class App extends React.Component {


  render() {
    return (
      <div className="app-container">
        < Header />
        <Question />
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
