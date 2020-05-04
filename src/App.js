import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleContainer from '../src/SampleContainer'
import SequenceStepContainer from './SequenceStepContainer';

function App() {
  return (
    <div className="App">
      <div className="drumblr">

        <div className="HeaderContainer">

          <div className="DisplayContainer">
            <div className="LCDContainer">

            </div>

            <div className="DialContainer">
              <div className="DialImprint"></div>
            </div>
          </div>

        </div>

        <div className="NavBar"></div>

        <div className="TempContainer"></div>
        

        <div className="FooterContainer">

        </div>

      </div>
      <SampleContainer />
      <SequenceStepContainer />
    </div>
  );
}

export default App;
