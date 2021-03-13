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

  test('should return user age in Venus years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onVenus()).toEqual("45.4")
  })

  test('should return user age in Mars years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onMars()).toEqual("14.9")
  })

  test('should return user age in Jupiter years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onJupiter()).toEqual("2.3")
  })

  test('should return years left on Earth', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonEarth()).toEqual(72);
  })

  test('should return years left on Mercury', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonMercury()).toEqual("298.6");
  })

  test('should return years left on Venus', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonVenus()).toEqual("116.8");
  })

  test('should return years left on Mars', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftOnMars()).toEqual("38.2")
  })
});