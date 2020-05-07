import React from 'react';

export default class SampleBtnIcon extends React.Component {

    state = {
        isActive: false
    }
    
    handleClick = (sample, sampleIndex, beatIndex) => {  
        // this.props.togglePlaying(sampleIndex, beatIndex)
        this.props.sequenceThisNote(sample, sampleIndex, beatIndex)
        this.setState({
            isActive: !this.state.isActive
        });
    }



    render(){
      return (
        <div className="SampleBtnIcon">
          <p>{this.props.name}</p>
        </div>
      )
    }
}