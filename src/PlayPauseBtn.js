import React from 'react'

export default class PlayPauseBtn extends React.Component {


  render() {
    return (
      <div className="PlayPauseBtn">
        <button onClick={this.props.toggleStart}>Play</button>
      </div>
    )
  }

}