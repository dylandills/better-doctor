var Doctors = require('./../js/doctor.js').docModule;

var displayDoctor = function(medicalIssue, doctorName, doctorNumber, doctorPatient) {
  $('.showDoctor').text(location + "MD: " + doctorName + "Phone Number: " + doctorNumber "Accepting New Patients: " + doctorPatient );
};

$(document).ready(function() {
  var currentDoctorObject = new Doctors();
  $('#better-doctor').click(function() {
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctors(medicalIssue,displayDoctor);
  });
});
