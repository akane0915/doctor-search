var DoctorSearch = require ('./../js/doctorsearch.js').doctorSearchModule;

$(document).ready(function(){
  $('#generate-doctors').click(function() {
    var symptomInput = $('#symptom-input').val();
    var newDoctorSearch = new DoctorSearch();
    newDoctorSearch.searchBySymptom(symptomInput);

  });
}); // Document Ready Close
