import React from 'react'

export default class TempoContainer extends React.Component {

  handleIncrease = () => {
    let currentBPM = this.props.bpm
    let incrementedBPM = currentBPM += 1;
    this.props.adjustBPM(incrementedBPM)
  }

  handleDecrease = () => {
    let currentBPM = this.props.bpm
    let decrementedBPM = currentBPM -= 1;
    this.props.adjustBPM(decrementedBPM)
  }

  render() {
    return (
      <div className="TempoContainer">
        <div className="Tempo">TEMPO</div>
        <div className="BPM">
          <div className="DecreaseBPM" onClick={this.handleDecrease}>-</div>
          <div className="BPMValue">{this.props.bpm}</div>
          <div className="IncreaseBPM" onClick={this.handleIncrease} value={1}>+</div>
        </div>
      </div>
    )
  }

}