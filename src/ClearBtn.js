import React from 'react'

export default class ClearBtn extends React.Component {

    render() {
        return (
        <div className="NavBarBtn" onClick={this.props.handleClear}>
            <p>Clear</p>
        </div>
        )
    }
  
  }