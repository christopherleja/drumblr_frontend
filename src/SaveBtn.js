import React from 'react'

export default class SaveBtn extends React.Component {

  render() {
    return (
      <div className="NavBarBtn" onClick={this.props.handleSave}>Save</div>
    )
  }

}