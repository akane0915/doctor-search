var apiKey = require('./../.env').apiKey;

DoctorSearch = require ('./../js/doctorsearch.js').DoctorSearchModule;

$(document).ready(function(){
  $('#generate-doctors').click(function() {
    var symptomInput = $('#symptom-input').val();
    console.log(symptomInput);

  });
});
