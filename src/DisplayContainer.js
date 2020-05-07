import React from 'react'
import TempoContainer from './TempoContainer'

export default class DisplayContainer extends React.Component {

  render() {
    return (
      <div className="DisplayContainer">
        <div className="LCD">
          <div className="Status">WELCOME TO DRUMBLR</div>
          <TempoContainer bpm={this.props.bpm} adjustBPM={this.props.adjustBPM} />
        </div>
      </div>
    )
  }

}