import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <>
        <Link to="/">Home</Link>
        <div id="beatList">
          {this.state.listedBeats.map(beat => {
            return(
              <div className="card?">
                <Link to={`/beats/${beat.id}`}>{beat.name}</Link>
              </div>
            ) 
          })}
        </div>
      </>
    )
  }
}

export default BeatsList
