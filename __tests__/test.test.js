import Date from './../src/date';


describe('checkDate', () => {

  test('should correctly create a date with month day year', () => {
    const date = new Date();
    
    expect(date.checkDate(1,2,2023)).toEqual('1, 2, 2023');

  });
});