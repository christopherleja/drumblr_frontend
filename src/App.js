import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MIDISounds from 'midi-sounds-react';
import HeaderContainer from './HeaderContainer';
import NavBar from './NavBar';
import SampleContainer from './SampleContainer';
import FooterContainer from './FooterContainer';
import './css/App.css';
import './css/HeaderContainer.css';
import './css/NavBar.css';
import './css/SampleContainer.css';
import './css/FooterContainer.css';
import './css/DisplayContainer.css';

const URL = 'http://localhost:3000';

export default class App extends React.Component {

  state = {
    bpm: 120,
    name: 'test',
    sample1: 3,
    sample2: 22,
    sample3: 26,
    sample4: 35,
    tracks:[
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ],
  }
  beats=[]

	componentDidMount() {
		this.setState({ initialized: true });
  }

  // render MIDISounds logo in order for samples to play when sequence is triggered
  renderMIDISounds = () => {
    return (
      <MIDISounds 
      className="MIDISounds"
      ref={(ref) => (this.midiSounds = ref)}
      appElementName="root" 
      drums={[this.state.sample1, this.state.sample2, this.state.sample3, this.state.sample4]}
      />
    )
  }
  

  fillBeat = () => {
    for(let i=0; i < 16; i++){
      let index = i
      let drums = [];          
        if (this.state.tracks[0][i]){drums.push(this.state.sample1)} 
        if (this.state.tracks[1][i]){drums.push(this.state.sample2)}
        if (this.state.tracks[2][i]){drums.push(this.state.sample3)}
        if (this.state.tracks[3][i]){drums.push(this.state.sample4)} 
        let drumBeat = [drums, []];
        this.beats[index] = drumBeat
    }
  }
                  
	playLoop = () => {
    this.fillBeat();
    this.midiSounds.startPlayLoop(this.beats, this.state.bpm, 1/16);
  }
  
	stopLoop = () => {
		this.midiSounds.stopPlayLoop();
  }

	toggleDrum = (track ,step) => {
    let a = [...this.state.tracks];
    a[track][step] = !a[track][step];
		this.setState({
      tracks: a
    });
    this.fillBeat();
  }
  
  handleAdjustBPM = (e) => {
    this.setState({
      bpm: e
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => 
          <div className="App">
          <div className="drumblr">
            <HeaderContainer bpm={this.state.bpm} adjustBPM={this.handleAdjustBPM} />
            <NavBar playLoop={this.playLoop} stopLoop={this.stopLoop} handleSave={this.handleSave} />
            <SampleContainer app={this.state} toggleDrum={this.toggleDrum} />
            <FooterContainer />
          </div>
          {this.renderMIDISounds()}
        </div>
        } />
        <Route path="/beats/:id" render={routeProps => <SampleContainer {...routeProps} app={this.state}/>} />
      </Switch>
    )
  }
}