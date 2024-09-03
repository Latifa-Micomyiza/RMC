// model/IntellectualModel.js
const mongoose = require('mongoose');

const IntellectualSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Gender: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Personalinfo: { type: String },
  PhoneNumber: { type: String, required: true },
  Country: { type: String, required: true },
  Residence: { type: String, required: true },
  DOB: { type: Date, required: true },
  SchoolName: { type: String },
  Combination: { type: String },
  FieldOfStudy: { type: String },
  Degree: { type: String },
  GraduationYear: { type: Date,required:true },
  OtherField: { type: String },
  CurrentCarrier: { type: String },
  Position: { type: String },
  Location: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Defaults to 'user'
});

const Intellectual = mongoose.model('Intellectual', IntellectualSchema);

module.exports = Intellectual;
