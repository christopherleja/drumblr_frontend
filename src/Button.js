import React from 'react'
import MIDISounds from 'midi-sounds-react';

class Button extends React.Component {
    
    // drum variable has to be in an array to work with library
    handleClick = (drum) => {
        this.props.playDrum([drum])
    }


    render(){
        let drum = this.props.drum
    return (
        <>
            {/* {console.log(this.props)} */}
            <button onClick={() => {this.handleClick([drum])}}>Play Drum</button>
        </>
    )
    }
}

export default Button