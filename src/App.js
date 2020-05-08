import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MIDISounds from 'midi-sounds-react';
import HeaderContainer from './HeaderContainer';
import NavBar from './NavBar';
import SampleContainer from './SampleContainer';
import FooterContainer from './FooterContainer';
import BeatsList from './BeatsList'
import './css/App.css';
import './css/HeaderContainer.css';
import './css/NavBar.css';
import './css/SampleContainer.css';
import './css/FooterContainer.css';
import './css/DisplayContainer.css';
import { Link } from 'react-router-dom'



const URL = 'http://localhost:3000';

export default class App extends React.Component {

  state = {
    bpm: 120,
    name: '',
    sample1: 3,
    sample2: 22,
    sample3: 17,
    sample4: 36,
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

  // clearAll = () => {
  //   this.setState({
  //     tracks:[
  //     [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  //     [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  //     [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  //     [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  //     ]
  //   }, () => console.log(this.state.tracks));
  // }
  
  handleAdjustBPM = (e) => {
    this.setState({
      bpm: e
    })
  }

  handleSave = () => {
    const object = {
      bpm: this.state.bpm,
      name: this.state.name,
      sample1: this.state.sample1,
      sample2: this.state.sample2,
      sample3: this.state.sample3,
      sample4: this.state.sample4,
      tracks: this.state.tracks
      }
    fetch(`${URL}` + '/beats', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then(beat => {
        console.log(beat)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  
  handleOnChange = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  handleFetch = (id) => {
    fetch(URL + `/beats/${id}`)
  .then(response => response.json())
  .then(beat => {
      this.setState({
        bpm: beat.bpm,
        name: beat.name,
        sample1: beat.sample1,
        sample2: beat.sample2,
        sample3: beat.sample3,
        sample4: beat.sample4,
        tracks: beat.tracks,
      })
  }
  )
  .catch((error) => {
    console.error('Error:', error);
  });
}

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => 
        <>
          <Link to="/">Home</Link>
          <Link to="/beats">Browse</Link>
          <div className="App">
              <HeaderContainer bpm={this.state.bpm} adjustBPM={this.handleAdjustBPM} midiSounds={this.renderMIDISounds()} />
              <NavBar playLoop={this.playLoop} stopLoop={this.stopLoop} handleSave={this.handleSave} />
              <SampleContainer app={this.state} toggleDrum={this.toggleDrum} />
              <FooterContainer handleFetch={this.handleFetch}/>
          </div>
          <form id="nameForm">
            <input type="text" name="beatName" onChange={this.handleOnChange} value={this.state.name} />
          </form>
          
        </>
        } />
        <Route exact path="/beats" render={() => <BeatsList/>}/>
        <Route path="/beats/:id" render={routeProps => <SampleContainer {...routeProps} app={this.state}/>} />
      </Switch>
    )
  }
}