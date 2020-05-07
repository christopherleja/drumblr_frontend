import React, { Component } from 'react';
import SampleBtnIcon from './SampleBtnIcon';
import Button from './Button';

export class SampleRow extends Component {

  getDrumButtons = () => {
	let buttonRow = []
	for (let i=0; i < 16; i++){
		buttonRow.push(<Button key={this.props.id, i} trackIndex={this.props.trackIndex} id={this.props.id} index={i} toggleDrum={this.props.toggleDrum} />
    )}
	return buttonRow
      }

  render() {
    return (
      <div className="SampleRow">
        <SampleBtnIcon /> 
        <div className="buttonRowContainer">
          {this.getDrumButtons()}
        </div>
      </div>
    )
  }
}

export default SampleRow
