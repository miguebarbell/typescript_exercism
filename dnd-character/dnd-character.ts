export class DnDCharacter {
  public static generateAbilityScore(): number {
    let minValue = 0;
    let sumOfNumbers = 0;
    for (let i = 0; i < 4; i++) {
      const randomValue: number = Math.floor(Math.random() * 6) + 1
      if (i !== 0) {
        if (minValue >= randomValue) minValue = randomValue;
      } else minValue = randomValue;
      sumOfNumbers += randomValue;
    }
    return sumOfNumbers - minValue;
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2)
  }
  constructor() {
    this.constitution = this.generateAbilityScore()
    this.strength = this.generateAbilityScore()
    this.dexterity = this.generateAbilityScore()
    this.intelligence = this.generateAbilityScore()
    this.wisdom = this.generateAbilityScore()
    this.charisma = this.generateAbilityScore()
    this.hitpoints = this.getModifierFor(this.constitution) + 10;
  }

  hitpoints: number;
  constitution: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  private generateAbilityScore() {
    let lessValue = 0;
    let sumOfNumbers = 0;
    for (let i = 0; i < 4; i++) {
      const randomValue: number = Math.floor(Math.random() * 6) + 1
      if (i !== 0) {
        if (lessValue >= randomValue) lessValue = randomValue;
      } else lessValue = randomValue;
      sumOfNumbers += randomValue;
    }
    return sumOfNumbers - lessValue;
  }

  private getModifierFor(constitution: number) {
    return Math.floor((constitution - 10)/2)
  }
}
