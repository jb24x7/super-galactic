import Date from './../src/date';


describe('checkDate', () => {

  test('should correctly return a string saying your age in earth years', () => {
    const date = new Date(2023);
    expect(date.checkDate('earth')).toEqual('you are 0 years old in earth years!');

  });

  test('should correctly return a string saying your age in mercury years', () => {
    const date = new Date(2023);
    expect(date.checkDate('mercury')).toEqual('you are 0 years old in mercury years!');

  });

  test('should correctly return a string saying your age in venus years', () => {
    const date = new Date(2023);
    expect(date.checkDate('venus')).toEqual('you are 0 years old in venus years!');

  });

  test('should correctly return a string saying your age in mars years', () => {
    const date = new Date(2023);
    expect(date.checkDate('mars')).toEqual('you are 0 years old in mars years!');

  });

  test('should correctly return a string saying your age in jupiter years', () => {
    const date = new Date(2023);
    expect(date.checkDate('jupiter')).toEqual('you are 0 years old in jupiter years!');

  });

});