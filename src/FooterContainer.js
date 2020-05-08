import React from 'react';

export default class FooterContainer extends React.Component {

  render() {
    return (
      <div className="FooterContainer">
        <div className="PresetContainer">
          <div className="Preset">Preset 1</div>
          <div className="Preset">Preset 2</div>
          <div className="Preset">Preset 3</div>
          <div className="Preset">Preset 4</div>
          <div className="Preset">Preset 5</div>
        </div>
        <div className="PresetBG">
          <p>Presets</p>
        </div>
        
        {/* {this.props.midiSounds} */}
      </div>
    )
  }
}