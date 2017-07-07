var apiKey = require('./../.env').apiKey;

function Doctors() {

}

function Doctor(first_name, last_name, phones, visit_address, accepts_new_patients){
  this.first_name = first_name;
  this.last_name = last_name;
  this.phones = phones;
  this.visit_address = visit_address;
  this.accepts_new_patients = accepts_new_patients;
}

Doctors.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
 .then(function(result) {
   var myDoctors = [];
   var doctorInfo = result.data;
   for(i = 0; i < doctorInfo.length; i++) {
      var newDoctor = new Doctor(result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].practices[0].phones[0].number, result.data[i].practices[0].visit_address.street,
      result.data[i].practices[0].accepts_new_patients);
      myDoctors.push(newDoctor);
    }
    displayDoctor(myDoctors);
  })
 .fail(function(error){
    console.log("fail");
  });
};

exports.docModule = Doctors;
