import React from 'react';
import SaveBtn from './SaveBtn';
import LoadBtn from './LoadBtn';
import PlayPauseBtn from './PlayPauseBtn';
import AdjustBPM from './AdjustBPM'

export default class NavBar extends React.Component {
  state = {
    start: false
  }

  handleMouseOver = (e) => {
    if (e.target.className === "NavBarBtnOff") {
      e.target.className = "NavBarBtnOn"
    }
  }

  render() {
    return (
      <div className="NavBar">
        <SaveBtn handleSave={this.props.handleSave} />
        <LoadBtn />
        <PlayPauseBtn playLoop={this.props.playLoop} stopLoop={this.props.stopLoop} />
        <AdjustBPM bpm={this.props.bpm} adjustBPM={this.props.adjustBPM}/>
      </div>
    )
  }

}