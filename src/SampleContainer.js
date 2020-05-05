import React from 'react';
import MIDISounds from 'midi-sounds-react';
import Button from '../src/Button'

class SampleContainer extends React.Component{
    state = {
        // just chose a default bpm to set state with
        bpm: 120,
        // I just hardcoded in some basic drums to start
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
        }, {
            id: 52, 
            name: 'Mid Tom 2', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 56, 
            name: 'Open Hi-hat', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 61, 
            name: 'Mid Tom 1', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 70, 
            name: 'Crash Cymbal', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 95, 
            name: 'Tambourine', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }, {
            id: 105, 
            name: 'Cowbell', 
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }
    ], instrumentObj: [{
            id: 458,
            melody: true,
            name: "Violin",
            isPlaying: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }]
        
    }

    sequenceThisNote = (isMelodic, sample, sampleIndex, beatIndex) => {
        let bpm = this.state.bpm 
        let beat = 4 * 60 / bpm
        let duration = beat/16
        let time = this.midiSounds.contextTime()
        let noteTime = time + (duration + (duration * beatIndex))
        if (isMelodic){
            this.midiSounds.playChordAt(noteTime, sample, [60], 0.5)
            console.log(time, noteTime)
        } else if (!isMelodic) {
            this.midiSounds.playDrumsAt(noteTime, [sample])
            console.log(time, noteTime)
            console.log(sampleIndex, this.state.drumObjs[sampleIndex])
        }
    }

    showDrums = () => {
        // this is basically just a console.log of the drums currently available
        this.midiSounds.player.loader.drumsKeys()
    }

    togglePlaying = (melody, sampleIndex, beatIndex) => {
        // first arg is boolean to determine whether sample is a drumObj or instrumentObj
        // second arg is position in drum/instrumentObj array (for accessing correct sample)
        // third arg is position in array, to access correct beat
        if (melody){

            this.state.instrumentObj[sampleIndex].isPlaying[beatIndex] = !this.state.instrumentObj[sampleIndex].isPlaying[beatIndex]
            console.log(this.state.instrumentObj[sampleIndex].isPlaying)
        } else {
            this.state.drumObjs[sampleIndex].isPlaying[beatIndex] = !this.state.drumObjs[sampleIndex].isPlaying[beatIndex]
            console.log(this.state.drumObjs[sampleIndex].isPlaying)
        }
    }

    // playDrum = (drum_id) => {
    //     this.midiSounds.playDrumsNow([drum_id])
    //     console.log(this.midiSounds.contextTime())
    // }

    // playInstrument = (instrument_id) => {
    //     // first arg is instrument, second arg is pitch, third arg is note duration
    //     this.midiSounds.playChordNow(instrument_id, [60], 0.5);
    // }

    getDrumObjButtons = () => {
        return this.state.drumObjs.map((drumObj, index) => {
            let drumIndex = index
            let drum = drumObj
            return drumObj.isPlaying.map((beat, index) => {
                return <Button key={drum.name + index} id={drum.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={drum} sequenceThisNote={this.sequenceThisNote}/>
            })
        })
    }

    getInstrumentObjButtons = () => {
        return this.state.instrumentObj.map((instrumentObj, index) => {
            let instrumentIndex = index
            let instrument = instrumentObj
            return instrumentObj.isPlaying.map((beat, index) => {
                return <Button key={instrument.name + index} id={instrument.id} melody={instrument.melody} sampleIndex={instrumentIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={instrument} sequenceThisNote={this.sequenceThisNote}/>
            })
        })
    }

    // TODO: TOMORROW
    // Wrap playing functionality in a single function
    // Something like
    // playBeat = (sample, sampleIndex, beatIndex) =>{
    // let time = this.midiSounds.contextTime()
    //  for (let i=0; i<17; i++)
    //  let bpm = this.state.bpm 
    //  let beat = 4 * 60 / bpm
    //  let duration = beat/16
    //  let noteTime = time + (duration + (duration * beatIndex))
    //  if (isPlaying === true && isMelodic){
    //  this.midiSounds.playChordAt(noteTime, sample, [60], 0.5)
    //  } else if (isPlaying){
    // this.midiSounds.playDrumsAt(noteTime, [sampleIndex])
    // 
    // } else { 
    //  null
    //  }
    // if (i === 16){
    // i = 0
    // time = this.midiSounds.contextTime()
    // }
    // 
    // }
    
    render(){
        return (
            <div className="SampleContainer">
                <MIDISounds 
                ref={(ref) => (this.midiSounds = ref)}
                appElementName="root" 
	            instruments={[458]} 
                drums={this.state.drums}
                />
                {/* {this.showDrums} */}
                {this.getDrumObjButtons()}
                {this.getInstrumentObjButtons()}
            </div>

        )

    }
}

export default SampleContainer