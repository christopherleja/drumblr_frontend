import React from 'react'

export default class LogoContainer extends React.Component {

  render() {
    return (
      <div className="LogoContainer">
        <div className="DRUMBLRLogo">
          DRUMBLR
        </div>
        <div className="MIDISoundsLogo">{this.props.midiSounds}</div>
      </div>
    )
  }

}