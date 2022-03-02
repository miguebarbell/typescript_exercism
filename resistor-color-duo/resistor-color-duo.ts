export function decodedValue(resistors: string[]): number {
  const colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ]

  return Number(`${colors.indexOf(resistors[0])}${colors.indexOf(resistors[1])}`)
}

