import React, { Component } from 'react';
import Button from './Button';

export class SampleRow extends Component {

  getDrumButtons = () => {
	let buttonRow = []
	for (let i=0; i < 16; i++){
		buttonRow.push(<Button key={this.props.id, i} trackIndex={this.props.trackIndex} id={this.props.id} index={i} toggleDrum={this.props.toggleDrum} />)
		}
	return buttonRow
      }

  render() {
    // console.log("Sample Row", this.props.appProps)
    // console.log("Sample row hanlders", this.props.toggleDrum)
    return (
      <div className="buttonRowContainer">
		    {this.getDrumButtons()}
	    </div>
    )
  }
}

export default SampleRow
