import React from 'react';
import Button from '../src/Button'

export default class SampleContainer extends React.Component{

    // Current working code that renders sequence buttons
    getDrumObjButtons = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {

            let drumIndex = index
            let drum = drumObj
            return drumObj.isPlaying.map((beat, index) => {
                return <Button key={drum.name + index} id={drum.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={drum} sequenceThisNote={this.props.sequenceThisNote}/>
            })
        })
    }

    // Kevins code - WIP
    newGetDrumObjButtons = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {
            let buttonRow = []
            let drumIndex = index
            drumObj.isPlaying.map((stepBoolean, index) => {
                buttonRow.push(<Button key={drumObj.name + index} id={drumObj.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={drumObj} sequenceThisNote={this.sequenceThisNote}/>)
            })
            console.log(buttonRow)
            return buttonRow
        })
    }
    
    render(){
        
        return (
            <div className="SampleContainer">
                {this.getDrumObjButtons()}
            </div>
        )
    }
}