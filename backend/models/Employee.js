const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    f_Id: { type: Number, required: true, unique: true },
    f_Image: { type: String },
    f_Name: { type: String, required: true },
    f_Email: { type: String, required: true, unique: true },
    f_Mobile: { type: String, required: true },
    f_Designation: { type: String, required: true },
    f_gender: { type: String, required: true },
    f_Course: { type: String, required: true },
    f_Createdate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
