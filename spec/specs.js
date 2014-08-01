describe('convertFahrenheit', function() {
  it("returns a celcius value when a fahrenheit temperature is entered", function() {
    convertFahrenheit(75).should.eql(23);
  });
});

describe('convertCelcius', function() {
  it("returns a celcius value when a fahrenheit temperature is entered", function() {
    convertCelcius(24).should.eql(75);
  });

});
