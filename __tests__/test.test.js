import Date from './../src/date';


describe('checkDate', () => {

  test('should correctly return a date with month day year', () => {
    const date = new Date();
    expect(date.checkDate('earth', 2023)).toEqual('you are 0 years old in earth years!');

  });

});