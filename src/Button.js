import React from 'react'
import MIDISounds from 'midi-sounds-react';

class Button extends React.Component {
    
    // drum variable has to be in an array to work with library
    handleClick = (sample, sampleIndex, beatIndex) => {
        
        this.props.togglePlaying(sampleIndex, beatIndex)
        this.props.playDrum([sample])
    }


    render(){
        let sample = this.props.sampleObj.id
        let sampleIndex = this.props.sampleIndex
        let beatIndex = this.props.beatIndex
    return (         
            <button onClick={() => {this.handleClick(sample, sampleIndex, beatIndex)}}>{this.props.sampleObj.name}</button>
    )
    }
}

export default Button