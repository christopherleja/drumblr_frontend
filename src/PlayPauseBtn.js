import React from 'react'

export default class PlayPauseBtn extends React.Component {

  state = {
    playActive: false,
    stopActive: true
}

// when user click PlayBtn and state is false, set to true otherwise do nothing
handlePlay = () => {
  if (!this.state.playActive && this.state.stopActive) {
    this.setState({
      playActive: !this.state.playActive,
      stopActive: !this.state.stopActive
    })
  }
  this.props.playLoop();
}

// when user click StopBtn and state is false, set to true otherwise do nothing
handleStop = () => {  
  if (!this.state.stopActive && this.state.playActive) {
    this.setState({
      stopActive: !this.state.stopActive,
      playActive: !this.state.playActive
    })
  }
  this.props.stopLoop();
}

  render() {
    return (
      <>
        <div className={this.state.playActive ? "PlayBtn active" : "PlayBtn inactive"} onClick={this.handlePlay}>
          <p>▶</p>
        </div>
        <div className={this.state.stopActive ? "StopBtn active" : "StopBtn inactive"} onClick={this.handleStop}>
          <p>◼️</p>
        </div>
      </>
    )
  }

}