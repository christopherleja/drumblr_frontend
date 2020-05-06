import React from 'react'

export default class SaveBtn extends React.Component {

  render() {
    return (
      <div className="SaveBtn">
        <button onClick={this.props.handleSave}>Save</button>
      </div>
    )
  }

}