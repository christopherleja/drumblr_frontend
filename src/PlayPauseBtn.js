import React from 'react'

export default class PlayPauseBtn extends React.Component {


  render() {
    return (
      <div className="PlayPauseBtn">
        <button onClick={this.props.playLoop}>Play</button>
        <button onClick={this.props.stopLoop}>Stop</button>
        
      </div>
    )
  }

}