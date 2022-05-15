export function hey(message: string): string {
  // trim spaces with regex
  message = message.replace('  ', ' ')
  message = message.replace(/\s*$/g, '')
  if (message === message.toUpperCase() && message.toLowerCase() === message && Number(message) === 0) {
    return 'Fine. Be that way!'
  }
  if (message.split('')[message.length - 1] === '?') {
    if (message.toUpperCase() === message && message.toLowerCase() !== message) return 'Calm down, I know what I\'m doing!'
    return 'Sure.'
  } else if (message.toUpperCase() === message && message.toLowerCase() !== message){
    return 'Whoa, chill out!'
  }
  return 'Whatever.'
}
