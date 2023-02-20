export default class Dateclass {

  constructor(yyyy, oldyear, futureyear) {

    this.year = yyyy;
    this.oldyear = oldyear;
    this.futureyear = futureyear;
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
      return "there has been " + ((2023 - this.year) - (this.oldyear - this.year)) + " years since you turned " + (this.oldyear - this.year) + " years old in earth years!";
    } else if (planet === 'mercury') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / .24) + " years since you turned " + (this.oldyear - this.year) + " years old in mercury years!";
    } else if (planet === 'venus') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / .62) + " years since you turned " + (this.oldyear - this.year) + " years old in venus years!";
    } else if (planet === 'mars') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / 1.88) + " years since you turned " + (this.oldyear - this.year) + " years old in mars years!";
    } else if (planet === 'jupiter') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / 11.86) + " years since you turned " + (this.oldyear - this.year) + " years old in jupiter years!";
    }
  }

  checkYearsFuture(planet) {
    if (planet === 'earth') {
      return "there will be " + (this.futureyear - 2023) + " years until you turn " + (this.futureyear - this.year) + " years old in earth years!";
    } else if (planet === 'mercury') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / .24) + " years since you turned " + (this.oldyear - this.year) + " years old in mercury years!";
    } else if (planet === 'venus') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / .62) + " years since you turned " + (this.oldyear - this.year) + " years old in venus years!";
    } else if (planet === 'mars') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / 1.88) + " years since you turned " + (this.oldyear - this.year) + " years old in mars years!";
    } else if (planet === 'jupiter') {
      return "there has been " + (((2023 - this.year) - (this.oldyear - this.year)) / 11.86) + " years since you turned " + (this.oldyear - this.year) + " years old in jupiter years!";
    }
  }
}
