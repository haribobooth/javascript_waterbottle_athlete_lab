var waterBottle = {
  amount: 0,
  fill: function(){
    this.amount = 100;
  },
  drink: function(){
    if(this.amount > 0){
      this.amount -= 10;
      return 10;
    }
    else {
      return "No water";
    }
  },
  empty: function(){
    this.amount = 0;
  }
};

module.exports = waterBottle;