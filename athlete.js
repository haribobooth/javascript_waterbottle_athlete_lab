var athlete = {
  hydration: 100,
  distanceCovered: 0,
  waterBottle: null,

  run: function(distance){
    if(this.hydration === 0){
      return "Cannot run";
    } else if(distance > this.hydration){
      this.distanceCovered += this.hydration;
      this.hydration = 0;
    } else {
      this.hydration -= distance;
      this.distanceCovered += distance;
    }
  },

  drink: function(){
    var drankAmount = this.waterBottle.drink();
    if( typeof(drankAmount) === 'number' ){
      this.hydration += drankAmount;
    } else {
      return drankAmount;
    }
  },
}

module.exports = athlete;