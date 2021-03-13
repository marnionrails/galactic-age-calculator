import Galactic from './../src/galactic.js';

describe('Galactic', () => {
    
    test('should return a string asking for a number, given any other type of input is entered', () => {
    const userAge = new Galactic("Marni");
    userAge.isNumber();
    const result = userAge.dialogue;
    expect(result).toEqual("please enter a valid number for age");
  });

    test('should return user age in Mercury years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onMercury()).toEqual("116.1")
  });
});