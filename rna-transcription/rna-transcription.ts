export function toRna(dna:string):string {
  interface Complement {
    [key: string]: string
  }
  const TABLE: Complement = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
  };
  let rna = '';
  for (let i = 0; i < dna.length; i++) {
    if (!TABLE[dna[i]]) throw new Error("Invalid input DNA.")
    rna += TABLE[dna[i]]
  }
  return rna
}
