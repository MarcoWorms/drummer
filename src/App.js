import React, { Component } from 'react';

import { playBeats } from './game/beats'

class App extends Component {
  componentDidMount () {
    playBeats({ amount: 8, bpm: 128 })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App
