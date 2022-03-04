export function decodedResistorValue(bands: [string, string, string]): string {
  const Bands = [
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
  const sum = `${Bands.indexOf(bands[0])}${Bands.indexOf(bands[1])}`
  const calculateOhms = (value: string): string=> {
    let ohms='';
    for (let i = 0; i < Bands.indexOf(bands[2]); i++) {
      ohms = ohms + '0'
    }
    return ohms
  }

const totalOhms = `${sum}${calculateOhms(bands[2])}`
if (totalOhms.length > 3) return `${totalOhms.slice(0,-3)} kiloohms`
return `${totalOhms} ohms`
}
