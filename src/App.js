import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleContainer from '../src/SampleContainer'

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

        

        <div className="FooterContainer">

        </div>

      </div>

      <SampleContainer />
    
    </div>
  );
}

export default App;
