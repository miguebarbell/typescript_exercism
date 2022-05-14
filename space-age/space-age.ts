export function age(planet: string, seconds: number): number {
  const planetEarthYearInSeconds = 31557600;
  let planetInSeconds : number;
  switch (planet) {
    case "mercury": {
      planetInSeconds = 0.2408467;
      break;
    }
    case "venus": {
      planetInSeconds = 0.61519726
      break;
    }
    case "mars": {
      planetInSeconds = 1.8808158;
      break;
    }
    case "jupiter": {
      planetInSeconds = 11.862615;
      break;
    }
    case "saturn": {
      planetInSeconds = 29.447498;
      break;
    }
    case "uranus": {
      planetInSeconds = 84.016846;
      break;
    }
    case "neptune": {
      planetInSeconds = 164.79132;
      break;
    }
    default: {
      planetInSeconds = 1;
      break;
    }
  }

  return Number((seconds / (planetInSeconds * planetEarthYearInSeconds)).toFixed(2));
}
// THIS IS HOW TO SOLVE IT WITH ENUMS
// interface Planets {
//   [key: string]: number
// }
// const RATIOS: Planets = {
//   mercury: 0.2408467,
//   venus: 0.61519726,
//   earth: 1,
//   mars: 1.8808158,
//   jupiter: 11.862615,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   neptune: 164.79132
// }
// export function age(planet: string, seconds: number): number {
//   return Number((seconds / 31557600 / RATIOS[planet]).toFixed(2))
// }
