describe('Dummy', function() {
  before(function() {
    document.tester.currentComponent = 'checkbox';
  });
  it('has checkboxes', function() {
    document.tester.next();
  });
  it('should pass', function() {
    expect(true).to.be.true
    expect($('#mocha')).to.have.id('mocha')
    $('#mocha').should.have.id('mocha')
  });
  after(function() {
    document.tester.currentComponent = 'none';
  });
})
