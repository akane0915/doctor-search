var DoctorSearch = require ('./../js/doctorsearch.js').doctorSearchModule;

var displayDoctors = function(result) {
  $('.list-of-docs').text("");
  result.data.forEach(function(doctor) {
    $('.list-of-docs').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
  });
};

var displayNoDoctors = function() {
  $('.list-of-docs').html(`<p>Your search did not return any results.  Consider visiting an urgent care facility in your area by visiting https://www.urgentcarelocations.com/.</p>`);
};

$(document).ready(function(){
  $('#generate-doctors').click(function() {
    var symptomInput = $('#symptom-input').val();
    $('#symptom-input').val("");
    var newDoctorSearch = new DoctorSearch();
    newDoctorSearch.searchBySymptom(symptomInput, displayDoctors, displayNoDoctors);

  });
}); // Document Ready Close
