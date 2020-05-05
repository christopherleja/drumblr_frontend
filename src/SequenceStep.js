import React, { Component } from 'react'

export class SequenceStep extends Component {
  
  state = {
    isActive: false
  }

  handleStepClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
    <div onClick={this.handleStepClick} className={this.state.isActive ? "activeStep" : "inactiveStep"}></div>
    )
  }
}

export default SequenceStep
