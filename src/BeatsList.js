import React, { Component } from 'react'

export class BeatsList extends Component {

  state = {listedBeats: [], loaded: false}

  componentDidMount(){
    fetch('http://localhost:3000/beats')
      .then(r => r.json())
      .then(beats => {
        console.log(beats)
        this.setState({
          listedBeats: beats,
          loaded: true
        })
      })
  }
  render() {
    if(!this.state.loaded){
      // return loading component here if we wanna do that
    }
    return (
      <ul id="beatList">
        {this.state.listedBeats.map(beat => {
          return <li>{beat.name}</li>
        })}
      </ul>
    )
  }
}

export default BeatsList
