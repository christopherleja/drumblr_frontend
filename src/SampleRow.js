import React, { Component } from 'react'
import Button from './Button'

export class SampleRow extends Component {

  getDrumObjButtons = () => {
    let buttonRow = []
    this.props.drumObj.isPlaying.map((stepBoolean, index) => {
        buttonRow.push(<Button key={this.props.drumObj.name + index} id={this.props.drumObj.id} sampleIndex={this.props.drumIndex} beatIndex={index} togglePlaying={this.props.togglePlaying} sampleObj={this.props.drumObj} sequenceThisNote={this.props.sequenceThisNote}/>)
      })
    return buttonRow
    }

  render() {
    return (
      <div className="buttonRowContainer">
        {this.getDrumObjButtons()}
      </div>
    )
  }
}

export default SampleRow
