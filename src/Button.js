import React from 'react'

class Button extends React.Component {

    state = {
        isActive: false
    }
    
    handleClick = (sample, sampleIndex, beatIndex) => {  
        this.props.togglePlaying(sampleIndex, beatIndex)
        this.props.sequenceThisNote(sample, sampleIndex, beatIndex)
        this.setState({
            isActive: !this.state.isActive
        });
    }



    render(){
        let sample = this.props.sampleObj.id
        let sampleIndex = this.props.sampleIndex
        let beatIndex = this.props.beatIndex
        return (         
        <div className={this.state.isActive ? "activeStep step" : "inactiveStep step"} onClick={() => {this.handleClick(sample, sampleIndex, beatIndex)}}></div>
        )
    }
}

export default Button