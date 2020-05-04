import React, { Component } from 'react'

export class SequenceStep extends Component {
  
  state = {
    isActive: false
  }

  handleStepClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    console.log(this.state.isActive)
  }

  render() {
    return (
    <div onClick={this.handleStepClick} className="sequenceStepButtons"></div>
    )
  }
}

export default SequenceStep
