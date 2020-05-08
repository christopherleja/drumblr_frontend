import React from 'react';

export default class FooterContainer extends React.Component {

  handleClick = (e) => {
    this.props.handleFetch(e.target.id)
  }

  render() {
    return (
      <div className="FooterContainer">
        <div className="PresetContainer">
          <div className="Preset" id={1} onClick={this.handleClick}>Preset 1</div>
          <div className="Preset" id={2} onClick={this.handleClick}>Preset 2</div>
          <div className="Preset" id={3} onClick={this.handleClick}>Preset 3</div>
          <div className="Preset" id={4} onClick={this.handleClick}>Preset 4</div>
          <div className="Preset" id={5} onClick={this.handleClick}>Preset 5</div>
        </div>
        <div className="PresetBG">
          <p>Presets</p>
        </div>
        
        {/* {this.props.midiSounds} */}
      </div>
    )
  }
}