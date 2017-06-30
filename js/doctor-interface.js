var Doctors = require('./../js/doctor.js').docModule;

var displayDoctor = function(medicalIssue, displayDoctor) {
  $('.showDoctor').text("Symptom: " + medicalIssue + "Doctor in your area: ");
};

$(document).ready(function() {
  var currentDoctorObject = new Doctors();
  $('#doctor').click(function() {
    var medicalIssue = $('#better-doctor').val();
    $('#better-doctor').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctor);
  });
});
