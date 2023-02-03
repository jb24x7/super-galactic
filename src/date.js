export default class Date {

  constructor(mm, dd, yyyy) {
    this.month = mm;
    this.day = dd;
    this.year = yyyy;
  }

  checkDate(mm, dd, yyyy, planet) {
    let month = parseInt(mm);
    let day = parseInt(dd);
    let year = parseInt(yyyy);

    if (planet === 'earth') {
      return month + ', ' + day + ', ' + year;
    } else if (planet === 'mercury') {
      return month + ', ' + day + ', ' + year;
    } else if (planet === 'venus') {
      return month + ', ' + day + ', ' + year;
    } else if (planet === 'mars') {
      return month + ', ' + day + ', ' + year;
    } else if (planet === 'jupiter') {
      return month + ', ' + day + ', ' + year;
    } else {
      return month + ', ' + day + ', ' + year;
    }
  }
}