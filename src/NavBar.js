import React from 'react';
import SaveBtn from './SaveBtn';
import LoadBtn from './LoadBtn';
import PlayPauseBtn from './PlayPauseBtn';

export default class NavBar extends React.Component {
  state = {
    start: false
  }

  // toggleStart = () => {
  //   this.setState({
  //     start: !this.state.start
  //   })
  //   if (this.state.start){
  //     this.props.startLoop()
  //   } else {
  //     console.log("stopped")
  //   }

  // }

  // handlePlayingSequence = () => {
  //   if (this.state.start){
  //     this.props.playSequence()
  //     for (let i=1; i < 10; i++){
  //       let delay = (4 * 60 / this.props.bpm) * i
  //       console.log(delay)
  //       if (this.state.start){
  //       setTimeout(() => this.props.playSequence(), (delay * 1000))
  //     } else if (!this.state.start){
  //       console.log("stopped")
  //     }
  //   }
  //   } else {
  //     console.log("stopped")
  //   } 
  // }

  render() {
    return (
      <div className="NavBar">
        <SaveBtn handleSave={this.props.handleSave} />
        <LoadBtn />
        <PlayPauseBtn playLoop={this.props.playLoop} stopLoop={this.props.stopLoop} />
      </div>
    )
  }

}