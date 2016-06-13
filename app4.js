$(function () {
  function Car (name, number) {
    this.name = name + number;
    this.idNumber = number;
  }

  var carCount = 10;
  var carArray = [];

  for (var i = 0; i < carCount; i++) {
    carArray.push(new Car ('car', i));
  }
  console.log(JSON.stringify(carArray));

  var returnedCarArray = [];

  $.ajax({
    type: 'GET',
    url: 'myData.json',
    dataType: 'json',
    success: function (data) {
      $.each(data, function(index, value) {
        returnedCarArray.push(this);
      });
    }
  }).done(function() {
    $.map(returnedCarArray, function (element, index) {
      console.log(element.name + ' at index #' + element.idNumber);
    });
  });
});
