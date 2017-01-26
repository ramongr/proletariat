Proletariat = {
  className: undefined,
  createSetter: undefined,
  createGetter: undefined,
  objectArray: undefined,
  classObject: {},
  setClassName: function(string){
    this.className = string;

    return this;
  },
  getClassName: function(){
    return this.className;
  },
  defineSetterFlag: function(bool){
    this.createSetter = bool;

    return this;
  },
  getSetterFlag: function(){
    return this.createSetter;
  },
  defineGetterFlag: function(bool){
    this.createGetter = bool;

    return this;
  },
  getGetterFlag: function(){
    return this.createGetter;
  },
  defineObjectArray: function(array){
    this.objectArray = array;

    return this;
  },
  createClassObject: function(){
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
  },
  createObjectArrayFunctions: function(functionPrefix){
    var i, functionName;

    functionName = [functionPrefix, this.objectArray[i].capitalize()].join("");
    for(i = 0; i < this.objectArray.length; i++){
      if(functionPrefix === 'set'){
        this.classObject[this.className][functionName] = createSetFunction(this.objectArray[i]);
      }else{
        this.classObject[this.className][functionName] = createGetFunction(this.objectArray[i]);
      }

    }
    
    return this;
  },
  export: function(){
    return this.classObject[this.getClassName()];
  }
};