export default class Date {

  constructor(mm, dd, yyyy) {
    this.month = mm;
    this.day = dd;
    this.year = yyyy;
  }

  checkDate(mm, dd, yyyy, planet, text) {
    let month = parseInt(mm);
    let day = parseInt(dd);
    let year = parseInt(yyyy);
    

    if (planet === 'earth') {
    text.innerHTML = "you are " + (2023 - year) + " years old in earth years!";
    } else if (planet === 'mercury') {
      text.innerHTML = "you are " + (2023 - year) + " years old in earth mercury!";
    } else if (planet === 'venus') {
      text.innerHTML = "you are " + (2023 - year) + " years old in earth venus!";
    } else if (planet === 'mars') {
      text.innerHTML = "you are " + (2023 - year) + " years old in earth mars!";
    } else if (planet === 'jupiter') {
      text.innerHTML = "you are " + (2023 - year) + " years old in earth jupiter!";
    } else {
      text.innerHTML = "Please select a planet!";
    }
  }
}