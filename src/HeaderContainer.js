import React from 'react';
import DisplayContainer from './DisplayContainer';
import LogoContainer from './LogoContainer';
import DialContainer from './DialContainer';

export default class HeaderContainer extends React.Component {

  render() {
    return (
      <div className="HeaderContainer">
        <DisplayContainer bpm={this.props.bpm} 
          adjustBPM={this.props.adjustBPM} 
          handleSave={this.props.handleSave}
          handleOnChange={this.props.handleOnChange}
        />

        <LogoContainer midiSounds={this.props.midiSounds} />

        <DialContainer />
      </div>
    )
  }

}