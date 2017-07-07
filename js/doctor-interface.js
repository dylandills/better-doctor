var Doctors = require('./../js/doctor.js').docModule;
//
var displayDoctor = function(myDoctors) {
  for(i = 0; i < myDoctors.length; i++ ) {
$('.showDoctor').append(
  "<ul><li><h3>MD: " + myDoctors[i].first_name + " " + myDoctors[i].last_name + "</li></h3>"
+ "<li><h3>Phone Number: " + myDoctors[i].phones + "</h3></li>"
+ "<li><h3>Address: "+ myDoctors[i].visit_address + "</h3></li>"
+ "<li><h3>Accepting New Patients?: " + myDoctors[0].accepts_new_patients) +  "</h3></li></ul>"
  }
};

$(document).ready(function() {
    var currentDoctorObject = new Doctors();
    $('#better-doctor').click(function() {
      $('.showDoctor').empty();
        var medicalIssue = $('#symptom').val();
        $('#symptom').val("");
        currentDoctorObject.getDoctors(medicalIssue, displayDoctor);
  });
});
