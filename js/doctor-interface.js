var Doctors = require('./../js/doctor.js').docModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctors();
  $('#better-doctor').click(function() {
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctors(medicalIssue);
  });
});
