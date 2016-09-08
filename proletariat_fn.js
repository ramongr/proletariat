Proletariat.setClassName = function(string){
  this.className = string;

  return this;
}

Proletariat.getClassName = function(){
  return this.className;
}

Proletariat.defineSetterFlag = function(bool){
  this.createSetter = bool;

  return this;
}

Proletariat.getSetterFlag = function(){
  return this.createSetter;
}

Proletariat.defineGetterFlag = function(bool){
  this.createGetter = bool;

  return this;
}

Proletariat.getGetterFlag = function(){
  return this.createGetter;
}

Proletariat.defineObjectArray = function(array){
  this.objectArray = array;

  return this;
}

Proletariat.createClassObject = function(){
  var i;

  // Check for object array
  if(this.objectArray === undefined)
    console.log("Object array not defined");

  // Set empty object for class
  this.classObject[this.className] = {};

  for(i = 0; i < this.objectArray.length; i++){
    this.classObject[this.className][this.objectArray[i]] = undefined;
  }

  return this;
}

function createGetFunction(object){
  return (function(){
    return this[object];
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

function createSetFunction(object){
  return (function(data){
    this[object] = data;

    return this;
  });
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
