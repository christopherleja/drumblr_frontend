import React from 'react';
import Button from './Button'
import SampleRow from './SampleRow'

export default class SampleContainer extends React.Component{

    // Current working code that renders sequence buttons
    renderButtonRows = () => {
        return this.props.app.drumObjs.map((drumObj, index) => {

                return <SampleRow drumObj={drumObj} drumIndex={index} sequenceThisNote={this.props.sequenceThisNote} togglePlaying={this.props.togglePlaying}/>
        })
    }
    
    render(){
        
        return (
            <div className="sampleContainer">
                {this.renderButtonRows()}
            </div>
        )
    }
}