import React from 'react';
import './css/App.css';
import './index.css';
import SampleContainer from '../src/SampleContainer';
import SequenceStepContainer from './SequenceStepContainer';
import HeaderContainer from './HeaderContainer';
import NavBar from './NavBar';
import MIDISounds from 'midi-sounds-react'

export default class App extends React.Component {

  state = {
    // just chose a default bpm to set state with
    bpm: 120,
    // I just hardcoded in some basic drums to start
    drumObjs: [{
        id: 3, 
        name: 'Bass Drum', 
        isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    }, {
        id: 22, 
        name: 'Hand Clap', 
        isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    }, {
        id: 26, 
        name: 'Snare', 
        isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },{
      id: 35, 
      name: 'Closed Hi-hat', 
      isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    }]
  }


  // togglePlaying = (sampleIndex, beatIndex) => {
  //   this.state.drumObjs[sampleIndex].isPlaying[beatIndex] = !this.state.drumObjs[sampleIndex].isPlaying[beatIndex]  
  //   }

  togglePlaying = (sampleIndex, beatIndex) => {
    let drumObjsCopy = [...this.state.drumObjs]
    let isPlayingCopy = [...drumObjsCopy[sampleIndex].isPlaying]
    console.log(isPlayingCopy[beatIndex])
  }

  sequenceThisNote = (sample, sampleIndex, beatIndex) => {
    let bpm = this.state.bpm 
    let beat = 4 * 60 / bpm
    let duration = beat/16
    let time = this.midiSounds.contextTime()
    let noteTime = time + (duration + (duration * beatIndex))
        this.midiSounds.playDrumsAt(noteTime, [sample])
        console.log(time, noteTime)
        console.log(sampleIndex, this.state.drumObjs[sampleIndex])
  }

  render() {
    return (
    <div className="App">
      <div className="drumblr">

        <HeaderContainer />
        <NavBar>
        <br></br><MIDISounds 
                ref={(ref) => (this.midiSounds = ref)}
                appElementName="root" 
	            // instruments={[458]} 
                drums={this.state.drumObjs}
                />
                <br></br>
        </NavBar>
        <SampleContainer app={this.state} sequenceThisNote={this.sequenceThisNote} togglePlaying={this.togglePlaying}/>

        <div className="FooterContainer"></div>

      </div>
    </div>
  );
}
}
