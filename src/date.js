export default class Dateclass {

  constructor(mm, dd, yyyy, oldyear) {
    this.month = mm;
    this.day = dd;
    this.year = yyyy;
    this.oldyear = oldyear;
  }

  checkDate(planet) {
    if (planet === 'earth') {
      return "you are " + (2023 - this.year) + " years old in earth years!";
    } else if (planet === 'mercury') {
      return "you are " + ((2023 - this.year) / .24) + " years old in mercury years!";
    } else if (planet === 'venus') {
      return "you are " + ((2023 - this.year) / .62) + " years old in venus years!";
    } else if (planet === 'mars') {
      return "you are " + ((2023 - this.year) / 1.88) + " years old in mars years!";
    } else if (planet === 'jupiter') {
      return "you are " + ((2023 - this.year) / 11.86) + " years old in jupiter years!";
    } else {
      return "Please select a planet!";
    }
  }

  checkYearsPassed(planet) {
    if (planet === 'earth') {
      return "there has been " + ((2023 - this.year) - this.oldyear) + " years since you turned " + (2023 - this.oldyear);
    } else if (planet === 'mercury') {
      return "you are " + ((2023 - this.year) / .24) + " years old in mercury years!";
    } else if (planet === 'venus') {
      return "you are " + ((2023 - this.year) / .62) + " years old in venus years!";
    } else if (planet === 'mars') {
      return "you are " + ((2023 - this.year) / 1.88) + " years old in mars years!";
    } else if (planet === 'jupiter') {
      return "you are " + ((2023 - this.year) / 11.86) + " years old in jupiter years!";
    } else {
      return "Please select a planet!";
    }
  }
}
