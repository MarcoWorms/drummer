const reverse = pipe(
  split(''),
  map(ifElse(equals(1), always(2), always(1))),
  join('')
)

const linear = '1000000010000000'

const alternate = '1000000020000000',

const halfDiddle = alternate + linear
const paradiddle = halfDiddle + alternate(halfDiddle)


export default [
  {
    name: 'Linear',
    sequence: linear,
  },
  {
    name: 'Alternate',
    sequence: alternate,
  },
  {
    name: 'half paradiddle',
    sequence: halfDiddle,
  },
  {
    name: 'full paradiddle',
    sequence: paradiddle,
  },
]
