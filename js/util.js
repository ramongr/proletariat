String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function createGetFunction(object){
  return (function(){
    return this[object];
  });
}

function createSetFunction(object){
  return (function(data){
    this[object] = data;

    return this;
  });
}