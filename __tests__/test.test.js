import Dateclass from './../src/date';


describe('checkDate', () => {

  test('should correctly return a string saying your age in earth years', () => {
    const date = new Dateclass(2023, 2021, 2025);
    expect(date.checkDate('earth')).toEqual('you are 0 years old in earth years!');

  });

  test('should correctly return a string saying your age in mercury years', () => {
    const date = new Dateclass(2023, 2021, 2025);
    expect(date.checkDate('mercury')).toEqual('you are 0 years old in mercury years!');

  });

  test('should correctly return a string saying your age in venus years', () => {
    const date = new Dateclass(2023, 2021, 2025);
    expect(date.checkDate('venus')).toEqual('you are 0 years old in venus years!');

  });

  test('should correctly return a string saying your age in mars years', () => {
    const date = new Dateclass(2023, 2021, 2025);
    expect(date.checkDate('mars')).toEqual('you are 0 years old in mars years!');

  });

  test('should correctly return a string saying your age in jupiter years', () => {
    const date = new Dateclass(2023, 2021, 2025);
    expect(date.checkDate('jupiter')).toEqual('you are 0 years old in jupiter years!');

  });

});

describe('checkYearsPassed', () => {

  test('should correctly return a string saying how many years have passed on the planet since your designated birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsPassed('earth')).toEqual('there has been 16 years since you turned 5 years old in earth years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsPassed('mercury')).toEqual('there has been 66.66666666666667 years since you turned 5 years old in mercury years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsPassed('venus')).toEqual('there has been 25.806451612903228 years since you turned 5 years old in venus years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsPassed('mars')).toEqual('there has been 8.51063829787234 years since you turned 5 years old in mars years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsPassed('jupiter')).toEqual('there has been 1.349072512647555 years since you turned 5 years old in jupiter years!');

  });

});

describe('checkYearsFuture', () => {

  test('should correctly return a string saying how many years have passed on the planet since your designated birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsFuture('earth')).toEqual('there will be 2 years until you turn 23 years old in earth years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsFuture('mercury')).toEqual('there will be 8.333333333333334 years until you turn 23 years old in mercury years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsFuture('venus')).toEqual('there will be 3.2258064516129035 years until you turn 23 years old in venus years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsFuture('mars')).toEqual('there will be 1.0638297872340425 years until you turn 23 years old in mars years!');

  });

  test('should correctly return a string saying how many years have passed on the planet since your last birthday', () => {
    const date = new Dateclass(2002, 2007, 2025);
    expect(date.checkYearsFuture('jupiter')).toEqual('there will be 0.16863406408094436 years until you turn 23 years old in jupiter years!');

  });

});