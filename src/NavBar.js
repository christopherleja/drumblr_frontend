import React from 'react';
import SaveBtn from './SaveBtn';
import LoadBtn from './LoadBtn';
import PlayPauseBtn from './PlayPauseBtn';

export default class NavBar extends React.Component {
  state = {
    start: false
  }

  toggleStart = () => {
    this.setState({
      start: !this.state.start
    })
  }

  componentDidUpdate = () => {
    if (this.state.start){
      this.props.playSequence()
    } 
  }

  render() {
    return (
      <div className="NavBar">
        <SaveBtn />
        <LoadBtn />
        <PlayPauseBtn toggleStart={this.toggleStart}/>
      </div>
    )
  }

}