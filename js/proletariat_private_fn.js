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
