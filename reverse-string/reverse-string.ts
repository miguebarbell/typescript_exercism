export function reverse(regularPhrase:string): string {
  let reverseString = '';
  for (let word in regularPhrase.split('')) {
    reverseString = regularPhrase.split('')[word] + reverseString;
  }
  return reverseString


}
