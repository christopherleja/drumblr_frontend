import React from 'react';
import Button from './Button'
import SampleRow from './SampleRow'

export default class SampleContainer extends React.Component{

    // Current working code that renders sequence buttons
    renderButtonRows = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {
            return <SampleRow drumObj={drumObj} drumIndex={index} sequenceThisNote={this.props.sequenceThisNote} />
        })
    }

    // Kevins code - WIP
    // newGetDrumObjButtons = () => {
    //     return this.props.app.drumObjs.map((drumObj, index) => {
    //         let buttonRow = []
    //         let drumIndex = index
    //         drumObj.isPlaying.map((stepBoolean, index) => {
    //             buttonRow.push(<Button key={drumObj.name + index} id={drumObj.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={drumObj} sequenceThisNote={this.sequenceThisNote}/>)
    //         })
    //         console.log(buttonRow)
    //         return buttonRow
    //     })
    // }
    
    render(){
        
        return (
            <div className="sampleContainer">
                {this.renderButtonRows()}
            </div>
        )
    }
}