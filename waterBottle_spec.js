var assert = require('assert');
var waterBottle = require('./waterBottle');

describe('waterBottle', function(){
  it('should start empty', function(){
    assert.equal(0, waterBottle.amount);
  });
  it('should get full', function(){
    waterBottle.fill();
    assert.equal(100, waterBottle.amount);
  });
  it('when drunk down by 10?', function(){
    waterBottle.fill();
    assert.equal(10, waterBottle.drink());
    assert.equal(90, waterBottle.amount);
  });
  it('should be able to empty', function(){
    waterBottle.fill();
    waterBottle.empty();
    assert.equal(0, waterBottle.amount);
  });
  it('no negative amount', function(){
    waterBottle.empty();
    assert.equal("No water", waterBottle.drink());

    assert.equal(0, waterBottle.amount);
  });
});
