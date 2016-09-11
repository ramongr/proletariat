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

Proletariat.createObjectArrayGetter = function(){
  var i, functionName, object;

  for(i = 0; i < this.objectArray.length; i++){
    functionName = ['get', this.objectArray[i].capitalize()].join("");

    this.classObject[this.className][functionName] = createGetFunction(this.objectArray[i]);
  }

  return this;
}

Proletariat.createObjectArraySetter = function(){
  var i, functionName;

  for(i = 0; i < this.objectArray.length; i++){
    functionName = ['set', this.objectArray[i].capitalize()].join("");

    this.classObject[this.className][functionName] = createSetFunction(this.objectArray[i]);
  }
  
  return this;
}

Proletariat.export = function(){
  return this.classObject[this.getClassName()];
}
