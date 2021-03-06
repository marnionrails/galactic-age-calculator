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
    expect(userAge.yearsLeftOnMars()).toEqual("38.3")
  })

  test('should return years left on Jupiter', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonJupiter()).toEqual("6.0")
  })

  test('should return years exceeded on earth if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonEarth()).toEqual("You surpassed the Earth life expectancy by 4 years")
  })

  test('should return years exceeded on Mercury if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonMercury()).toEqual("You surpassed the Mercury life expectancy by 16.6 years")
  })

  test('should return years exceeded on Venus if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonVenus()).toEqual("You surpassed the Venus life expectancy by 6.5 years")
  })

  test('should return years exceeded on Mars if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftOnMars()).toEqual("You surpassed the Mars life expectancy by 2.1 years")
  })

  test('should return years exceeded on Jupiter if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonJupiter()).toEqual("You surpassed the Jupiter life expectancy by 0.3 years")
  })

  test('should return error if user enters anything that is not a number for age on Jupiter', () => {
    const userAge = new Galactic("A")
    expect(userAge.yearsLeftonJupiter()).toEqual("Error")
  })

  test('should return error if user enters anything that is not a number for age of Mars', () => {
    const userAge = new Galactic("A")
    expect(userAge.yearsLeftOnMars()).toEqual("Error")
  })

    test('should return error if user enters anything that is not a number for age of Venus', () => {
    const userAge = new Galactic("A")
    expect(userAge.yearsLeftonVenus()).toEqual("Error")
  })

    test('should return error if user enters anythng that is not a number for age on Mercury', () => {
    const userAge = new Galactic("A")
    expect(userAge.yearsLeftonMercury()).toEqual("Error")
  })

    test('should return error if user enters anything that is not a number for age on Earth', () => {
    const userAge = new Galactic("A")
    expect(userAge.yearsLeftonEarth()).toEqual("Error")
  })
});