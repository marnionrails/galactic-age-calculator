export default class Galactic {
  constructor (user_age) {
    this.age = user_age;
    this.dialogue = '';
  }

  isNumber () {
    for (const char of this.age) {
      if (typeof char != "number") {
        this.dialogue = "please enter a valid number for age";
      }
    }
    return this.dialogue;
  }

  onMercury() {
    let earthDays = this.age * 365;
    let mercuryAge = earthDays/88;
    return mercuryAge.toFixed(1);
  }

  onVenus() {
    let earthDays = this.age * 365;
    let venusAge = earthDays/225;
    return venusAge.toFixed(1);
  }

  onMars() {
    let earthDays = this.age * 365;
    let marsAge = earthDays/687;
    return marsAge.toFixed(1);
  }
}