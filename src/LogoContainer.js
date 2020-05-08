import React from 'react'

export default class LogoContainer extends React.Component {

  render() {
    return (
      <div className="LogoContainer">
        <div className="DRUMBLRLogo">
          DRUMBLR
        </div>
        <div className="ModelLogo">
          <h1>DR-880</h1>
        </div>
        <div className="MIDISoundsLogo">{this.props.midiSounds}</div>
      </div>
    )
  }

}