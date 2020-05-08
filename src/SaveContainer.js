import React from 'react'

export default class SaveContainer extends React.Component {

  handleIncrease = () => {
    let currentBPM = this.props.bpm
    let incrementedBPM = currentBPM += 5;
    this.props.adjustBPM(incrementedBPM)
  }

  handleDecrease = () => {
    let currentBPM = this.props.bpm
    let decrementedBPM = currentBPM -= 5;
    this.props.adjustBPM(decrementedBPM)
  }

  handleScroll = (e) => {
    console.log(e.target)
  }  

  render() {
    return (
      <div className="SaveContainer">
        <div className="Presets">PRESET NAME</div>
        <input className="PresetsValue" type="text" onChange={this.props.handleOnChange} value={this.props.value}></input>
      </div>
    )
  }

}

// <input id="myText" type="text" style="border:none; background: transparent; outline: 0;"/>
// handleSave={this.props.handleSave}
// handleOnChange={this.props.handleOnChange}