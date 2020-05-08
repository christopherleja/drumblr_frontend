import React from 'react';
import SaveBtn from './SaveBtn';
// import LoadBtn from './LoadBtn';
import PlayPauseBtn from './PlayPauseBtn';


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
        {/* <LoadBtn clearAll={this.props.clearAll} /> */}
        <SaveBtn handleSave={this.props.handleSave} />
        <PlayPauseBtn playLoop={this.props.playLoop} 
          stopLoop={this.props.stopLoop} 
        />
      </div>
    )
  }

}