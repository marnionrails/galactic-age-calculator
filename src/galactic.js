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

  onJupiter() {
    let jupiterAge = this.age/12;
    return jupiterAge.toFixed(1);
  }

  yearsLeftonEarth() {
    if (this.age <= 100) {
      let yearsLeft = 100 - this.age;
      return yearsLeft;
    }
    else if (this.age > 100) {
      let yearsExceeded = this.age - 100;
      return `You surpassed the Earth life expectancy by ${yearsExceeded} years`;
    }
    else {
      return "Error";
    }
  }

  yearsLeftonMercury() {
    if (this.age <= 100) {
      let yearsLeft = this.yearsLeftonEarth();
      this.age = yearsLeft;
      return this.onMercury();
    }
    else if (this.age > 100) {
      this.age = this.age - 100;
      let yearsExceeded = this.onMercury();
      return `You surpassed the Mercury life expectancy by ${yearsExceeded} years`;
    }
    else {
      return "Error";
    }
   
  }

  yearsLeftonVenus() {
    if (this.age <= 100) {
      let yearsLeft = this.yearsLeftonEarth();
      this.age = yearsLeft;
      return this.onVenus();
    }
    else if (this.age > 100) {
      this.age = this.age - 100;
      let yearsExceeded = this.onVenus();
      return `You surpassed the Venus life expectancy by ${yearsExceeded} years`;
    }
    else {
      return "Error";
    }

  }

  yearsLeftOnMars() {
    if (this.age <= 100) {
      let yearsLeft = this.yearsLeftonEarth();
      this.age = yearsLeft;
      return this.onMars();
    }
    else if (this.age > 100) {
      this.age = this.age - 100;
      let yearsExceeded = this.onMars();
      return `You surpassed the Mars life expectancy by ${yearsExceeded} years`;
    }
    else {
      return "Error";
    }
  }

  yearsLeftonJupiter() {
    if (this.age <= 100) {
      let yearsLeft = this.yearsLeftonEarth();
      this.age = yearsLeft;
      return this.onJupiter();
    }
    else if (this.age > 100) {
      return 0;
    }
    else {
      return "Error";
    }
  }
}