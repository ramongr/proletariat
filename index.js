$(document).ready(function(){
  var cObj = Proletariat.setClassName("Test")
    .defineSetterFlag(true)
    .defineGetterFlag(true)
    .defineObjectArray(['name', 'age', 'year'])
    .createClassObject()
    .createObjectArrayGetter()
    .createObjectArraySetter(),
  obj;

  obj = cObj.export();
});

String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};