import React from 'react'

class Button extends React.Component {

    state = {
        isActive: false
    }
    
    handleClick = () => {  
        this.props.toggleDrum(this.props.trackIndex, this.props.index);
        this.setState({
            isActive: !this.state.isActive
        });
    }



    render(){
        return (         
        <div className={this.state.isActive ? "activeStep step" : "inactiveStep step"} onClick={this.handleClick}></div>
        )
    }
}

export default Button