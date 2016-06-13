$(function () {
  var person = {
    name: 'Aaron',
    hobby: 'Stamp Collecting',
    describe: function () {
      console.log('I am ' + this.name + ' and I like ' + this.hobby);
    }
  };
  console.log(person);

  var personJSON = JSON.stringify(person);
  console.log(personJSON);
  person.describe();

  var newPersonJSON = personJSON.replace(/Aaron/, 'Jeremy');
  console.log(newPersonJSON);

  //newPerson does not have any methods, because JSON deals only in data, no functions
  //so when the original person object was stringified to JSON, the method was not stringified
  //so if you parse that JSON in order to create a new object, the method will not come with it
  var newPerson = JSON.parse(newPersonJSON);
  console.log(newPerson);
});
