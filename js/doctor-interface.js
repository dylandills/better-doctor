var Doctors = require('./../js/doctor.js').docModule;

var displayDoctor = function(doctor) {
  $('.showDoctor').text("Here's your doctor: " + doctor);
};

$(document).ready(function() {
  var currentDoctorObject = new Doctors();
  $('#better-doctor').click(function() {
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctor);
  });
});
