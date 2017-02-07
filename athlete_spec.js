var assert = require('assert');
var athlete = require('./athlete');
var waterBottle = require('./waterBottle');

describe('Athlete', function() {
  it('should start hydrated', function(){
    assert.equal(100, athlete.hydration);
  });

  it('should have a distance covered', function(){
    assert.equal(0, athlete.distanceCovered);
  });

  it('should be able to run', function(){
    athlete.run(10);
    assert.equal(10, athlete.distanceCovered);
    assert.equal(90, athlete.hydration);
  });

  it('should not be able to run when dehydrated', function(){
    athlete.distanceCovered = 0;
    athlete.hydration = 0;
    assert.equal("Cannot run", athlete.run(10));
    assert.equal(0, athlete.distanceCovered);
  });

  it('should run until hydrated', function(){
    athlete.distanceCovered = 0;
    athlete.hydration = 50;
    athlete.run(150);
    assert.equal(50, athlete.distanceCovered);
    assert.equal(0, athlete.hydration);
  });

  it('should be able to drink from waterbottle', function(){
    athlete.distanceCovered = 0;
    athlete.hydration = 0;
    waterBottle.fill();

    athlete.waterBottle = waterBottle;
    athlete.drink();
    athlete.run(10)

    assert.equal(0, athlete.hydration);
    assert.equal(90, waterBottle.amount);
    assert.equal(10, athlete.distanceCovered);
  });
});