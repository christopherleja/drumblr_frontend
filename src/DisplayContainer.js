import React from 'react';
import TempoContainer from './TempoContainer';
import SaveContainer from './SaveContainer';

export default class DisplayContainer extends React.Component {

  render() {
    return (
      <div className="DisplayContainer">
        <div className="LCD">
          <div className="Status">WELCOME TO DRUMBLR</div>

          <TempoContainer bpm={this.props.bpm} 
            adjustBPM={this.props.adjustBPM}
          />

          <SaveContainer handleSave={this.props.handleSave}
            handleOnChange={this.props.handleOnChange}
            value={this.props.value}
          />

        </div>
      </div>
    )
  }

}