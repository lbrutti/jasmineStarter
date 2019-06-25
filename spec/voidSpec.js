describe('Selenium Grid rocks test', function() {
    var seleniumGridRocks = null;
    beforeEach(function() {
      seleniumGridRocks = true;
    });
    it('should rock your socks off', function() {
      expect(seleniumGridRocks).toBeTruthy();
    })
  });