var DoctorSearch = require ('./../js/doctorsearch.js').doctorSearchModule;

var displayDoctors = function(result) {
  $('.list-of-docs').text("");
  result.data.forEach(function(doctor) {
    $('.list-of-docs').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}
        <ul>
          <li>Facility:   ${doctor.practices[0].name}</li>
          <li>Location:   ${doctor.practices[0].visit_address.street},  ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}  ${doctor.practices[0].visit_address.zip}</li>
        </ul>
      </li>`);
  });
};

var displayNoDoctors = function() {
  $('.list-of-docs').html(`<p>Your search did not return any results.  Consider visiting an urgent care facility in your area by visiting <a>https://www.urgentcarelocations.com/.</a></p>`);
};

$(document).ready(function(){
  $('#generate-doctors').click(function() {
    var symptomInput = $('#symptom-input').val();
    $('#symptom-input').val("");
    var newDoctorSearch = new DoctorSearch();
    newDoctorSearch.searchBySymptom(symptomInput, displayDoctors, displayNoDoctors);

  });
}); // Document Ready Close
