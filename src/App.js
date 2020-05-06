import React from 'react';
import MIDISounds from 'midi-sounds-react';
import SampleContainer from './SampleContainer';
import HeaderContainer from './HeaderContainer';
import NavBar from './NavBar';
import './css/App.css';

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
    }],
  }


  playSequence = () => {

    // gets array of notes with value of true
    let notesToPlay = []
    let drums = [...this.state.drumObjs]
    for (let i=0; i<drums.length; i++)
      drums[i].isPlaying.filter((note, index )=> {
        if (note){
          let drum = drums[i].id
          let noteObj = {sample: drum, beatIndex: index}          
          notesToPlay.push(noteObj)
          return notesToPlay
        }
      })
  
    let bpm = this.state.bpm 
    let beat = 4 * 60 / bpm
    let duration = beat/16
    let time = this.midiSounds.contextTime()

    notesToPlay.map(note => {
      let noteTime = time + (duration + (duration * note.beatIndex))
      this.midiSounds.playDrumsAt(noteTime, [note.sample])
      
    })
    // let noteTime = time + (duration + (duration * beatIndex))

  }

  sequenceThisNote = (sample, sampleIndex, beatIndex) => {
    let bpm = this.state.bpm 
    let beat = 4 * 60 / bpm
    let duration = beat/16
    let time = this.midiSounds.contextTime()
    let noteTime = time + (duration + (duration * beatIndex))
      
    // this.midiSounds.playDrumsAt(noteTime, [sample])
    // console.log(time, noteTime)
    // console.log(sampleIndex, this.props.app.drumObjs[sampleIndex])
}

  togglePlaying = (sampleIndex, beatIndex) => {
    let updatedDrumObjs = [...this.state.drumObjs]
    let updatedIsPlaying = updatedDrumObjs[sampleIndex].isPlaying
    updatedIsPlaying[beatIndex] = !updatedIsPlaying[beatIndex]
    updatedDrumObjs[sampleIndex].isPlaying = [...this.state.drumObjs[sampleIndex].isPlaying]
    this.setState({
      drumObjs: updatedDrumObjs
    })
  }

  // render MIDISounds logo in order for samples to play when sequence is triggered
  renderMIDISounds = () => {
    return (
      <MIDISounds 
      ref={(ref) => (this.midiSounds = ref)}
      appElementName="root" 
      instruments={[3, 458]}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="drumblr">
          <HeaderContainer />
          <NavBar playSequence={this.playSequence}/>
          <SampleContainer app={this.state} togglePlaying={this.togglePlaying} sequenceThisNote={this.sequenceThisNote}/>
          <div className="FooterContainer"></div>
        </div>
        {this.renderMIDISounds()}
      </div>
  );
}
}
