import React from 'react'

export default class PlayPauseBtn extends React.Component {


  render() {
    return (
      <>
        <div className="PlayBtn" onClick={this.props.playLoop}>
          <p>Play</p>
        </div>
        <div className="StopBtn" onClick={this.props.stopLoop}>
          <p>Stop</p>
        </div>
      </>
    )
  }

}