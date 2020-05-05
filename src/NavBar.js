import React from 'react';
import SaveBtn from './SaveBtn';
import LoadBtn from './LoadBtn';
import PlayPauseBtn from './PlayPauseBtn';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className="NavBar">
        <SaveBtn />
        <LoadBtn />
        <PlayPauseBtn />
      </div>
    )
  }

}