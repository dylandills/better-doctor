var Doctors = require('./../js/doctor.js').docModule;
//
function displayDoctor (doctor) {
    $('.showDoctor').text("MD: " + doctor.name + "Phone Number: " + doctor.phone + "Accepting New Patients: " + doctor.accepting );
};

$(document).ready(function() {
    var currentDoctorObject = new Doctors();
    $('#better-doctor').click(function() {
        var medicalIssue = $('#symptom').val();
        $('#symptom').val("");
        displayDoctor(currentDoctorObject.getDoctors(doctor));
  });
});
