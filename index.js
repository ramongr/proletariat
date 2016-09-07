$(document).ready(function(){
  var obj;

  Proletariat.setClassName("Teste")
    .defineSetterFlag(true)
    .defineGetterFlag(true)
    .defineObjectArray(['name', 'age', 'year'])
    .createClassObject()
    .createObjectArrayGetter()
    .createObjectArraySetter();

});

String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};