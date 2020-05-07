import React from 'react'

export default class PlayPauseBtn extends React.Component {


  render() {
    return (
      <>
        <div className="PlayBtn" onClick={this.props.playLoop}>Play</div>
        <div className="PauseBtn" onClick={this.props.stopLoop}>Pause</div>
      </>
    )
  }

}