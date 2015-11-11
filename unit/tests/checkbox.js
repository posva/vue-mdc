describe('Checkbox', function() {
  var mdlCbSelector = 'label[for=check]';
  var check, checkLabeh;
  before(function(done) {
    document.tester.currentComponent = 'checkbox';
    Vue.nextTick(function() {
      check = $('#check');
      checkLabel = $('label[for=check]');
      done();
    });
  });
  it('exists', function() {
    check.should.exists;
    check.should.have.prop('type', 'checkbox');
  });;
  it('is updraded', function() {
    var span = $('label[for=check] span:nth-child(2)');
    check.should.have.class('mdl-checkbox__input');
    span.should.have.class('mdl-checkbox__label').and.have.text('Check me');
  });
  it('is checked', function() {
    check.should.be.checked;
  });
})
