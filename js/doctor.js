var apiKey = require('./../.env').apiKey;

function Doctors() {

}

function transformDoctor(doctor){
  return {
    name: doctor.name,
    phone: doctor.phones[0].number,
    accepting: doctor.accepts_new_patients
  }
}

Doctors.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
 .then(function(result) {
   return transformDoctor(result.data[0].practices[0]);
  })
 .fail(function(error){
    console.log("fail");
  });
};

exports.docModule = Doctors;
