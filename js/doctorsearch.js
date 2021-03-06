var apiKey = require('./../.env').apiKey;

function DoctorSearch() {
}

DoctorSearch.prototype.getDoctors = function (symptom, displayDoctors, displayNoDoctors) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=${apiKey}`)
    .then(function(result) {
      if (result.data.length <= 0) {
        displayNoDoctors();
      } else {
        displayDoctors(result);
      }
    }).fail(function(error) {
     $('.list-of-docs').text(error.responseJSON.message);
   });
};

DoctorSearch.prototype.returnSpecialities = function(displaySpecialities) {
  $.get(`https://api.betterdoctor.com/2016-03-01/specialties?fields=name&user_key=${apiKey}`)
    .then(function(result) {
      displaySpecialities(result);
    }).fail(function(error) {
       $('.list-of-docs').text(error.responseJSON.message);
     });
};

exports.doctorSearchModule = DoctorSearch;
