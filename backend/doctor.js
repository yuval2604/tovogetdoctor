const mongoose = require("mongoose");
("use strict");
const bcrypt = require("bcrypt");
const saltRounds = 10;

var doctorSchema = mongoose.Schema({
  id: String,
  username: String,
  email: String,
  phonenumber: String,
  sex: String,
  specialty: String, //should choose from a list
  avalibility: String, // should choosen from schedule
  address: String,
  location_lat: Number,
  location_lng: Number,
  price: Number,
  password: String,
  // product_image: {
  //   type: String,
  // },

  // ,
  // //FOR FUTURE DEVELOPMENT
  // // REPRESENT ALL THE REQUESTS THE DOCTOR HAVE
  // users_requests: {
  //     username: [String],
  //     phonenumber: [String],
  //     Email: [String]
  // }
});
doctorSchema.pre("save", function (next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

doctorSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model("doctors", doctorSchema);
