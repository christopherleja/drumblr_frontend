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
        <div className="Tempo">TEMPO</div>
        <div className="BPM">
          <div className="DecreaseBPM" onClick={this.handleDecrease}>-</div>
          <div className="BPMValue" onScroll={() => this.handleScroll} >{this.props.bpm}</div>
          <div className="IncreaseBPM" onClick={this.handleIncrease} value={1}>+</div>
        </div>
      </div>
    )
  }

}