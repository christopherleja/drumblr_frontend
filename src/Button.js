import React from 'react'
import MIDISounds from 'midi-sounds-react';

class Button extends React.Component {
    
    // drum variable has to be in an array to work with library
    handleClick = (sample, sampleIndex, beatIndex) => {  
        let isMelodic = this.props.sampleObj.melody  
        this.props.togglePlaying(isMelodic, sampleIndex, beatIndex)
        this.props.sequenceThisNote(isMelodic, sample, sampleIndex, beatIndex)
        // console.log(isMelodic, sampleIndex, beatIndex)
    }


    render(){
        let sample = this.props.sampleObj.id
        let sampleIndex = this.props.sampleIndex
        let beatIndex = this.props.beatIndex
    return (         
            <button className="SequenceBtn" onClick={() => {this.handleClick(sample, sampleIndex, beatIndex)}} >{this.props.sampleObj.name}</button>
    )
    }
}

export default Button