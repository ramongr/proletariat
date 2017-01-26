document.addEventListener('DOMContentLoaded', function(){
  var cObj = Proletariat.setClassName("Test")
    .defineSetterFlag(true)
    .defineGetterFlag(true)
    .defineObjectArray(['name', 'age', 'year'])
    .createClassObject()
    .createObjectArrayFunctions('get')
    .createObjectArrayFunctions('set');

  obj = cObj.export();

  console.log(obj);
});