import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import SampleContainer from '../src/SampleContainer'
import SequenceStepContainer from './SequenceStepContainer';

function App() {
  return (
    <div className="App">
      <div className="drumblr">

        <div className="HeaderContainer">

          <div className="Logo">
            DRUMBLR
          </div>

          <div className="DisplayContainer">
              {/* <div className="Sample">SAMPLE</div>
              <div className="Tempo">TEMPO</div> */}
              <div className="Status">WELCOME TO DRUMBLR</div>
          </div>
          
          <div className="DialContainer">
              <div className="DialImprint"></div>
          </div>

        </div>

        <div className="NavBar">
          {/* <div className="BtnLabel">

          </div> */}
        </div>

        <div className="TempContainer">
          <SequenceStepContainer />
        </div>

        <div className="FooterContainer">
        </div>

      </div>
      <SampleContainer />
    </div>
  );
}

export default App;
