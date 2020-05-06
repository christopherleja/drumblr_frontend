import React from 'react';
import Button from './Button'
import SampleRow from './SampleRow'

export default class SampleContainer extends React.Component{

    // Current working code that renders sequence buttons
    renderButtonRows = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {
<<<<<<< HEAD

            let drumIndex = index
            let drum = drumObj
            return drumObj.isPlaying.map((beat, index) => {
                return <Button key={drum.name + index} id={drum.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.props.togglePlaying} sampleObj={drum} sequenceThisNote={this.props.sequenceThisNote}/>
            })
=======
            return <SampleRow drumObj={drumObj} drumIndex={index} sequenceThisNote={this.props.sequenceThisNote} />
>>>>>>> e5f35d04f7713657a25fce4cfa4dcf32381dd69f
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