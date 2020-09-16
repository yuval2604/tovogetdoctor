const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    number: String,
    email: String,
    avalibility: String,
    speciality: String,
    fesition: String,
    time: String, // represent the time the secretary set
    timeOfPatiant: String, // time the patiant send request
    timeOfsecretarySet: String, // time the secretary set the time
  }
  // { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
