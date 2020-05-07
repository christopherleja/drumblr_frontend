import React from 'react'

class Button extends React.Component {

    state = {
        isActive: false
    }
    
    handleClick = () => {  
        this.props.onClick();
        // this.props.sequenceThisNote(sample, sampleIndex, beatIndex)
        this.setState({
            isActive: !this.state.isActive
        });
    }



    render(){
        // let sampleIndex = this.props.sampleIndex
        // let beatIndex = this.props.beatIndex
        return (         
        <div className={this.state.isActive ? "activeStep step" : "inactiveStep step"} onClick={this.handleClick}></div>
        )
    }
}

export default Button