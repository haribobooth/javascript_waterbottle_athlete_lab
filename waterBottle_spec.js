var assert = require('assert');

var wB = require('./waterBottle');

describe('waterBottle', function(){
  it('should start empty', function(){
    assert.equal(0, wB.amount);
  });
  it('should get full', function(){
    wB.fill();
    assert.equal(100, wB.amount);
  });
  it('when drunk down by 10?', function(){
    wB.fill();
    assert.equal(10, wB.drink());
    assert.equal(90, wB.amount);
  });
  it('should be able to empty', function(){
    wB.fill();
    wB.empty();
    assert.equal(0, wB.amount);
  });
  it('no negative amount', function(){
    wB.empty();
    assert.equal("No water", wB.drink());
    
    assert.equal(0, wB.amount);
  });
});