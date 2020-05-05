import React from 'react';
import DisplayContainer from './DisplayContainer';
import LogoContainer from './LogoContainer';
import DialContainer from './DialContainer';

export default class HeaderContainer extends React.Component {

  render() {
    return (
      <div className="HeaderContainer">
        <DisplayContainer />
        <LogoContainer />
        <DialContainer />
      </div>
    )
  }

}