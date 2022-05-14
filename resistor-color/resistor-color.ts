export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]
export const colorCode = (band: string): number | string[] => {
  return COLORS.indexOf(band)
}
