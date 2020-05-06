import React from 'react';
import SampleRow from './SampleRow';

export default class SampleContainer extends React.Component{

    // Current working code that renders sequence buttons
    renderButtonRows = () => {
        return this.props.app.tracks.map((drumObj, index) => {

                return <SampleRow drumObj={drumObj} drumIndex={index} sequenceThisNote={this.props.sequenceThisNote} togglePlaying={this.props.togglePlaying}/>
        })
    }
    
    render(){
        console.log("SampleContainer Props", this.props.app)
        return (
            <div className="sampleContainer">
                <SampleRow appProps={this.props} toggleDrum={this.props.toggleDrum} id={3} />
                <SampleRow appProps={this.props} toggleDrum={this.props.toggleDrum} id={22} />
                <SampleRow appProps={this.props} toggleDrum={this.props.toggleDrum} id={26} />
                <SampleRow appProps={this.props} toggleDrum={this.props.toggleDrum} id={35} />
            </div>
        )
    }
}