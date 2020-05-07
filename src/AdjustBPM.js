import React from 'react'

export default class AdjustBPM extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.adjustBPM(e.target.value)
  }

    render() {
      return (
        <>
            <form onClick={this.handleSubmit}>
              <input type="number" name="bpm" className="NavBarBtn" defaultValue={this.props.bpm} />
            </form>
        </>
      )
    }
  
  }