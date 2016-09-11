$(document).ready(function(){
  var obj, cObj = Proletariat.setClassName("Test")
    .defineSetterFlag(true)
    .defineGetterFlag(true)
    .defineObjectArray(['name', 'age', 'year'])
    .createClassObject()
    .createObjectArrayGetter()
    .createObjectArraySetter(),

  obj = cObj.export();

  console.log(obj);
});