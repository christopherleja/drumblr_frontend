import React from 'react';
import MIDISounds from 'midi-sounds-react';
import Button from '../src/Button'

class SampleContainer extends React.Component{
    state = {
        // I just hardcoded in some basic drums to start
        drums: [ 3, 17, 22, 26, 32, 35, 40, 45, 52, 58, 61, 70, 95, 105],
        drumObjs: [{
            id: 3, 
            name: 'Bass Drum', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 17, 
            name: 'Snare Drum', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 22, 
            name: 'Hand Clap', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 26, 
            name: 'Snare 2', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        },{
            id: 32, 
            name: 'Low Tom 2', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        },{
            id: 35, 
            name: 'Closed Hi-hat', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        },{
            id: 40, 
            name: 'Low Tom 1', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        },{
            id: 45, 
            name: 'Pedal Hi-hat', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }
    ]
    }

    showDrums = () => {
        // this is basically just a console.log of the drums currently available
        this.midiSounds.player.loader.drumsKeys()
    }

    togglePlaying = (drumIndex, beatIndex) => {
        this.state.drumObjs[drumIndex].isPlaying[beatIndex] = !this.state.drumObjs[drumIndex].isPlaying[beatIndex]

        console.log(this.state.drumObjs[drumIndex].isPlaying)
    }

    playDrum = (drum_id) => {
        this.midiSounds.playDrumsNow([drum_id])
    }

    getDrumObjButtons = () => {
        return this.state.drumObjs.map((drumObj, index) => {
            let drumIndex = index
            let drum = drumObj
            return drumObj.isPlaying.map((beat, index) => {
                return <Button key={drum.name + index} id={drum.id} drumIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} drumObj={drum} playDrum={this.playDrum}/>
            })
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
                {/* {this.showDrums} */}
                {this.getDrumObjButtons()}
            </>

        )

    }
}

export default SampleContainer