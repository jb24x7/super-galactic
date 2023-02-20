import Dateclass from './../src/date';


describe('checkDate', () => {

  test('should correctly return a string saying your age in earth years', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkDate('earth')).toEqual('you are 0 years old in earth years!');

  });

  test('should correctly return a string saying your age in mercury years', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkDate('mercury')).toEqual('you are 0 years old in mercury years!');

  });

  test('should correctly return a string saying your age in venus years', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkDate('venus')).toEqual('you are 0 years old in venus years!');

  });

  test('should correctly return a string saying your age in mars years', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkDate('mars')).toEqual('you are 0 years old in mars years!');

  });

  test('should correctly return a string saying your age in jupiter years', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkDate('jupiter')).toEqual('you are 0 years old in jupiter years!');

  });

});

describe('checkYearsPassed', () => {

  test('should correctly return a string saying how many years have passed on the planet since your designated birthday', () => {
    const date = new Dateclass(2002, 2007);
    expect(date.checkYearsPassed('earth')).toEqual('there has been 16 years since you turned 5');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkYearsPassed('mercury')).toEqual('you are 0 years old in mercury years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkYearsPassed('venus')).toEqual('you are 0 years old in venus years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkYearsPassed('mars')).toEqual('you are 0 years old in mars years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2023, 2021);
    expect(date.checkYearsPassed('jupiter')).toEqual('you are 0 years old in jupiter years!');

  });

});