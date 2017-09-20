import React, { Component } from 'react';

const context = new AudioContext()

const bpm = 218

const addBeat = time => {
  const o = context.createOscillator()
  o.type = "sine"
  o.connect(context.destination)
  o.start(time)
  o.stop(time + 0.1)
}

class App extends Component {
  componentDidMount () {
    const initialTime = context.currentTime
    const times = Array.from({ length: 10 })
      .map((el, i) => initialTime + i * (60/bpm))
    times.forEach(addBeat)

  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App
