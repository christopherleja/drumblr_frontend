import React from 'react';
import MIDISounds from 'midi-sounds-react';
import Button from '../src/Button'
import SequenceStep from '../src/SequenceStep'

export default class SampleContainer extends React.Component{

    sequenceThisNote = (sample, sampleIndex, beatIndex) => {
        // console.log(this.props)
        this.props.sequenceThisNote(sample, sampleIndex, beatIndex)        
    }

    // togglePlaying = (sampleIndex, beatIndex) => {
    //    this.props.app.togglePlaying(sampleIndex, beatIndex)
    // }

    getDrumObjButtons = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {
            let drumIndex = index
            let drum = drumObj
            return drumObj.isPlaying.map((beat, index) => {
                return <Button key={drum.name + index} id={drum.id} sampleIndex={drumIndex} beatIndex={index} togglePlaying={this.togglePlaying} sampleObj={drum} sequenceThisNote={this.props.sequenceThisNote}/>
            })
        })
    }



    // playBeat = () =>{
        
        // this.props.app.drumObjs.forEach((sample, index) => {
        //     let sampleIndex = index
        //     sample.isPlaying.map((beat, index) => {
        //         let beatIndex = index
        //         return beatIndex, sampleIndex
        //     })
        // })
        
        // let sampleIndex = this.props.app.drumObjs.forEach((sample, index) => {
        //     return index
        // })
        // let beatIndex = this.props.app.drumObjs.forEach(sample => {})

        // let time = this.midiSounds.contextTime()
        
        // let melodyIsPlaying = this.props.app.instrumentObj[sampleIndex].isPlaying[beatIndex]
        // let drumIsPlaying = this.props.app.drumObjs[sampleIndex].isPlaying[beatIndex]
        // for (let i=0; i<17; i++)
        // // let bpm = this.props.app.bpm 
        // beat = 4 * 60 / this.props.app.bpm
        // let duration = beat / 16
        // let noteTime = time + (duration + (duration * beatIndex))
        // if (melodyIsPlaying && melody){
        //     this.midiSounds.playChordAt(noteTime, sample, [60], 0.5)
        // } else if (drumIsPlaying){
        //     this.midiSounds.playDrumsAt(noteTime, [sampleIndex])
        // } else { 
        //     null
        // }
        // if (i === 16){
        //     i = 0
        //     time = this.midiSounds.contextTime()
        // }
        
    // }
    
    render(){
        
        return (
            <div className="SampleContainer">
                
                {this.getDrumObjButtons()}
                
                
            </div>

        )

    }
}