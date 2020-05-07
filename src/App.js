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
    sample1: 3,
    sample2: 22,
    sample3: 26,
    sample4: 35,
    beats: [],
    tracks:[
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ],
    // data: [],
  }

	componentDidMount() {
		this.setState({ initialized: true });
  }
  
  // playSequence = () => {
  //   // gets array of notes with value of true
  //   let notesToPlay = []
  //   let drums = [...this.state.drumObjs]
  //   for (let i=0; i<drums.length; i++)
  //     drums[i].isPlaying.filter((note, index )=> {
  //       if (note){
  //         let drum = drums[i].midiID
  //         let noteObj = {sample: drum, beatIndex: index}          
  //         notesToPlay.push(noteObj)
  //         return notesToPlay
  //       }
  //     })
    
  //   let bpm = this.state.bpm 
  //   let beat = 4 * 60 / bpm
  //   let duration = beat/16
  //   let time = null
  //   if (this.midiSounds === null){
  //     time = 0
  //   } else{
  //     time = this.midiSounds.contextTime()
  //   }
  //   console.log(this.midiSounds)
  //   notesToPlay.map(note => {
  //     let noteTime = time + (duration + (duration * note.beatIndex))
  //     this.midiSounds.playDrumsAt(noteTime, [note.sample])
      
  //   })
  // }

  // render MIDISounds logo in order for samples to play when sequence is triggered
  renderMIDISounds = () => {
    return (
      <MIDISounds 
      ref={(ref) => (this.midiSounds = ref)}
      appElementName="root" 
      // instruments={[]}
      drums={[this.state.sample1, this.state.sample2, this.state.sample3, this.state.sample4]}
      />
    )
  }
  
  // componentDidUpdate = () => {
  //   this.fillBeat()
  //   console.log(this.state)
  // }

  fillBeat = () => {
    for(let i=0; i<16; i++){
      let drums = [];
      // beat variable should be an array of up to 16 arrays, one for
      // each beat where a selected sample should play
      let beats = [...this.state.beats]
      beats[i] = []
      
      // if a sample should play, first array will return which sample
      
      // getting drum sounds (if they are selected) by scanning
      // beat index to see if it returns any true values
      // if any true values are returned, pushes drum into drums array 
      // this.state.tracks.map((track, index) => {
        // let trackArrIndex = index
        // return track.map((beat, index) => {
          //   let beatIndex = index
          //   if (beat && trackArrIndex === 0){
            //     drums.push(this.state.sample1)
            
            //   } else if (beat && trackArrIndex === 1){
              //     drums.push(this.state.sample2)
              
              //   } else if (beat && trackArrIndex === 2){
                //     drums.push(this.state.sample3)
                
                //   } else if (beat && trackArrIndex === 3){
                  //     drums.push(this.state.sample4)         
                  //   }
                  //   if (!beats[beatIndex]){
                    //     beats[beatIndex] = drumBeat
                    //   }
                    //   this.setState({
                      //     beats: beats
                      //   }, console.log(this.state.beats))
                      // })
                      
                      // getting drum sounds (if they are selected) by scanning
                      // beat index to see if it returns any true values
                      // if any true values are returned, pushes drum into drums array 
                      
                      if (this.state.tracks[0][i]){
                        drums.push(this.state.sample1)
                      } 
                      if (this.state.tracks[1][i]){
                        drums.push(this.state.sample2)
                      }
                      if (this.state.tracks[2][i]){
                        drums.push(this.state.sample3)
                      }
                      if (this.state.tracks[3][i]){
                        drums.push(this.state.sample4)
                      } 

                      let drumBeat = [drums, []];
                      beats[i] = drumBeat
                      
                      this.setState({
                        beats: beats
                      }, console.log(beats[i], beats))
                    }
                    }
                  
                  
	playLoop = () => {
    this.fillBeat();
    console.log(this.state.beats)
    // this.midiSounds.startPlayLoop(this.state.beats, 120, 1/16);
    // console.log("playLoop triggered")
  }
  
	stopLoop = () => {
		this.midiSounds.stopPlayLoop();
  }
  
  // componentDidUpdate = () => {
  //   console.log("this.state.beats", this.state.beats)
  // }

	toggleDrum = (track ,step) => {
    let a = [...this.state.tracks];
    a[track][step] = !a[track][step];
		this.setState({
      tracks: a
    });
    this.fillBeat();
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
