import React, { Component } from 'react';
import Button from './Button';

export class SampleRow extends Component {

  getDrumObjButtons = () => {
    let buttonRow = []
    this.props.drumObj.isPlaying.map((stepBoolean, index) => {
        buttonRow.push(<Button key={this.props.drumObj.name + index} id={this.props.drumObj.midiID} sampleIndex={this.props.drumIndex} beatIndex={index} togglePlaying={this.props.togglePlaying} sampleObj={this.props.drumObj} sequenceThisNote={this.props.sequenceThisNote}/>)
      })
    return buttonRow
    }

  render() {
    // console.log("Sample Row", this.props.appProps)
    // console.log("Sample row hanlders", this.props.toggleDrum)
    return (
      <div className="buttonRowContainer">
        	<Button onClick={() => this.props.toggleDrum(this.props.id,0)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,1)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,2)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,3)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,4)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,5)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,6)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,7)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,8)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,9)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,10)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,11)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,12)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,13)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,14)} />
					<Button onClick={() => this.props.toggleDrum(this.props.id,15)} />
      </div>
    )
  }
}

export default SampleRow
