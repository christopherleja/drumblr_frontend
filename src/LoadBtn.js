import React from 'react'

export default class LoadBtn extends React.Component {

  render() {
    return (
      <div className="NavBarBtn" onClick={this.props.clearAll}>
        <p>Clear</p>
      </div>
    )
  }

}