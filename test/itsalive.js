console.log('something funny');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);

describe('2+2', function(){
  it('adds numbers', function(){
    expect(2+2).to.equal(4);
  });
});

describe('async', function(){
  it('tests setTimeout', function(done){
    var date = new Date();
    setTimeout(function(){
      var duration = new Date()- date;
      expect(duration).to.be.closeTo(1000, 50);
      done();

    }, 1000);

  })
})


function plusOne (num){
  return num++;
}

describe('spies', function(){
  it('test if plusOne has been called x times', function(){
    var spy = chai.spy(plusOne);
    var arr = [1, 2, 3];
    arr.forEach(spy);
    expect(spy).to.have.been.called.exactly(3);
  })
})
