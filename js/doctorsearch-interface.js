var DoctorSearch = require ('./../js/doctorsearch.js').doctorSearchModule;

var displayDoctors = function(result) {
  $('.list-of-docs').text("");
  result.data.forEach(function(doctor) {
    var doctorWebsite;
    if(typeof doctor.practices[0].website == 'undefined'){
      doctorWebsite = "N/A";
    } else {
      doctorWebsite = `<a>${doctor.practices[0].website}</a>`;
    }
    $('.list-of-docs').append(
      `<li>${doctor.profile.first_name} ${doctor.profile.last_name}
        <ul>
          <li>Facility: ${doctor.practices[0].name}</li>
          <li>Location:
            ${doctor.practices[0].visit_address.street},
            ${doctor.practices[0].visit_address.city},
            ${doctor.practices[0].visit_address.state}
            ${doctor.practices[0].visit_address.zip}
          </li>
          <li>Website: ${doctorWebsite}</li>
        </ul>
      </li>`
    );
  });
};

var displayNoDoctors = function() {
  $('.list-of-docs').html(`<p>Your search did not return any results.  Consider visiting an urgent care facility in your area by visiting <a>https://www.urgentcarelocations.com/.</a></p>`);
};

var displaySpecialities = function(result) {
  result.data.forEach(function(entry){
    $('#specialty-input').append(`<option>${entry.name}</option>`);
  });
};

$(document).ready(function(){

  var newDoc = new DoctorSearch();
  newDoc.returnSpecialities(displaySpecialities);


  $('#search-by-specialty').click(function() {
    var specialtyInput = $('#specialty-input').val();
    var newDoctorSearch = new DoctorSearch();
    newDoctorSearch.getDoctors(specialtyInput, displayDoctors, displayNoDoctors);

  });

  $('#search-by-symptom').click(function() {
    var symptomInput = $('#symptom-input').val();
    $('#symptom-input').val("");
    var newDoctorSearch = new DoctorSearch();
    newDoctorSearch.getDoctors(symptomInput, displayDoctors, displayNoDoctors);
  });

}); // Document Ready Close
