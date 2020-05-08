import React from 'react';
import SampleRow from './SampleRow';

export default class SampleContainer extends React.Component{
    
    render(){
        return (
            <div className="sampleContainer">
                <SampleRow app={this.props.app} tracks={this.props.app.tracks[0]} trackIndex={0} toggleDrum={this.props.toggleDrum} id={3} name="Bass Drum" />
                <SampleRow app={this.props.app} tracks={this.props.app.tracks[1]} trackIndex={1} toggleDrum={this.props.toggleDrum} id={22} name="Clap" />
                <SampleRow app={this.props.app} tracks={this.props.app.tracks[2]} trackIndex={2} toggleDrum={this.props.toggleDrum} id={26} name="Snare" />
                <SampleRow app={this.props.app} tracks={this.props.app.tracks[4]} trackIndex={3} toggleDrum={this.props.toggleDrum} id={35} name="HiHat" />
            </div>
        )
    }
}