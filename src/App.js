import React from 'react';
import MIDISounds from 'midi-sounds-react';
import SampleContainer from './SampleContainer';
import HeaderContainer from './HeaderContainer';
import NavBar from './NavBar';
import './css/App.css';
const URL = 'http://localhost:3000';

export default class App extends React.Component {

  state = {
    bpm: 120,
    name: 'test',
    Sample1: 3,
    Sample2: 22,
    Sample3: 26,
    Sample4: 35,
    tracks:[
      [true,false,false,false,false,false,false,true,true,false,true,false,false,false,true,false],
      [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
      [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
      [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false]
    ],
    data: [],
    beats: []
  }

	componentDidMount() {
		this.setState({ initialized: true });
  }
  
  playSequence = () => {
    // gets array of notes with value of true
    let notesToPlay = []
    let drums = [...this.state.drumObjs]
    for (let i=0; i<drums.length; i++)
      drums[i].isPlaying.filter((note, index )=> {
        if (note){
          let drum = drums[i].midiID
          let noteObj = {sample: drum, beatIndex: index}          
          notesToPlay.push(noteObj)
          return notesToPlay
        }
      })
    
    let bpm = this.state.bpm 
    let beat = 4 * 60 / bpm
    let duration = beat/16
    let time = null
    if (this.midiSounds === null){
      time = 0
    } else{
      time = this.midiSounds.contextTime()
    }
    console.log(this.midiSounds)
    notesToPlay.map(note => {
      let noteTime = time + (duration + (duration * note.beatIndex))
      this.midiSounds.playDrumsAt(noteTime, [note.sample])
      
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
  
  fillBeat = () => {
		for(let i=0;i<16;i++){
      let drums=[];
      let newBeats = [...this.state.beats]
      
			if(this.state.tracks[0][i]){drums.push(this.state.Sample1);}
			if(this.state.tracks[1][i]){drums.push(this.state.Sample2);}
			if(this.state.tracks[2][i]){drums.push(this.state.Sample3);}
			if(this.state.tracks[3][i]){drums.push(this.state.Sample4);}
      let beat=[drums,[]];
      newBeats[i] = beat
      console.log("newBeats value", newBeats[i])
      console.log("the beat value", beat)
			this.setState({
        beats: newBeats
      })
    }
	}
	playLoop = () => {
    this.fillBeat();
    // debugger;
    this.midiSounds.startPlayLoop(this.state.beats, 120, 1/16);
    console.log("playLoop triggered")
  }
  
	stopLoop = () => {
		this.midiSounds.stopPlayLoop();
  }
  
	toggleDrum = (track,step) => {
		let a=this.state.tracks;
		a[track][step] = !a[track][step];
		this.setState({tracks:a});
    this.fillBeat();
    console.log("toggleDrum", track, step)
	}

  render() {
    return (
      <div className="App">
      <button onClick={this.fillBeat}>fillBeat</button>
        <div className="drumblr">
          <HeaderContainer />
          <NavBar playLoop={this.playLoop} stopLoop={this.stopLoop} handleSave={this.handleSave} bpm={this.state.bpm} />
          <SampleContainer app={this.state} toggleDrum={this.toggleDrum} />
          <div className="FooterContainer"></div>
        </div>
        {this.renderMIDISounds()}
      </div>
  );
}
}
