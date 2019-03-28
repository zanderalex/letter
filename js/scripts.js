$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var nameInput = $('input#name').val();
    var streetInput = $('input#street').val();
    var cityInput = $('input#city').val();
    var stateInput = $('input#state').val();
    var zipInput = $('input#zip').val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $('.city').text(cityInput);
    $('.state').text(stateInput);
    $('.zip').text(zipInput);


    $("#mail").show();

    event.preventDefault();
  });
});
