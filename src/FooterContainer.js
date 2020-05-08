import React from 'react';

export default class FooterContainer extends React.Component {

  render() {
    return (
      <div className="FooterContainer">
        <div className="PresetContainer">
          <div className="Preset"><a href="http://localhost:3001/beats">Preset 1</a></div>
          <div className="Preset"><a href="http://localhost:3001/beats">Preset 2</a></div>
          <div className="Preset"><a href="http://localhost:3001/beats">Preset 3</a></div>
          <div className="Preset"><a href="http://localhost:3001/beats">Preset 4</a></div>
          <div className="Preset"><a href="http://localhost:3001/beats">Preset 5</a></div>
        </div>
        <div className="PresetBG">
          <p>Presets</p>
        </div>
        
        {/* {this.props.midiSounds} */}
      </div>
    )
  }
}