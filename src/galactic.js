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
}