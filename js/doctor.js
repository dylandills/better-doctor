var apiKey = require('./../.env').apiKey;

Doctors = function(){
}

Doctors.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=034dae68c47ac41017ac8c9e2f78b009')
  .then(function(result) {
    displayDoctor(medicalIssue, result.data.practices[0]);
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.docModule = Doctors;
