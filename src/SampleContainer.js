import React from 'react';
import MIDISounds from 'midi-sounds-react';
import Button from '../src/Button'

class SampleContainer extends React.Component{
    state = {
        // I just hardcoded in some basic drums to start
        drums: [3, 17, 22, 26, 32, 35, 40, 45, 52, 58, 61, 70, 95, 105]
    }

    showDrums = () => {
        // this is basically just a console.log of the drums currently available
        this.midiSounds.player.loader.drumsKeys()
    }

    playDrum = (drum_id) => {
        this.midiSounds.playDrumsNow([drum_id])
    }

    getDrumName = (drum) => {
        return this.midiSounds.player.loader.drumInfo(drum).title
    } 

    getDrumButtons = () => {
        return this.state.drums.map(drum => {
            return <Button drum={drum} name={ this.getDrumName} playDrum={this.playDrum}/>
        })
    }

    render(){
        return (
            <>
                <MIDISounds 
                ref={(ref) => (this.midiSounds = ref)}
                appElementName="root" 
                // commented out instruments, but could be useful to add synth parts/basslines, etc.
                // left it commented in case we decide to add that later.
	            // instruments={[]} 
                drums={this.state.drums}
                />
                {this.showDrums}
                {this.getDrumButtons()}
            </>

        )

    }
}

export default SampleContainer