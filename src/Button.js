import React from 'react'
import MIDISounds from 'midi-sounds-react';

class Button extends React.Component {
    
    // drum variable has to be in an array to work with library
    handleClick = (drum, drumIndex, beatIndex) => {
        
        this.props.togglePlaying(drumIndex, beatIndex)
        this.props.playDrum([drum])
    }


    render(){
        let drum = this.props.drumObj.id
        let drumIndex = this.props.drumIndex
        let beatIndex = this.props.beatIndex

        // let name = this.midiSounds.player.loader.drumInfo(drum.id).title
    return (         
            <button onClick={() => {this.handleClick(drum, drumIndex, beatIndex)}}>{this.props.drumObj.name}</button>
    )
    }
}

export default Button