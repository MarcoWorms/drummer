const context = new AudioContext()

const addBeat = time => {
  const o = context.createOscillator()
  o.type = "sine"
  o.connect(context.destination)
  o.start(time)
  o.stop(time + 0.1)
}

export const playBeats = (amount, bpm) => {
  const initialTime = context.currentTime
  const times = Array.from({ length: amount })
    .map((el, i) => initialTime + i * (60/bpm))
  times.forEach(addBeat)
}
