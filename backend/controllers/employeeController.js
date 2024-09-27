// controllers/employeeController.js
const Employee = require('../models/Employee');
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require('dotenv').config();


// Create a new employee
exports.createEmployee = async (req, res) => {
    
    const { f_Id, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body;

    try {
        // Check if required fields are present
        if (!f_Id || !f_Name || !f_Email || !f_Mobile || !f_Designation || !f_gender || !f_Course) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        // Log req.files to check if the file is being uploaded
        console.log("req.files:", req.files);

        let f_Image = "";
        
        if (req.files && req.files.f_Image) {
            // Log the file details to see if the file is there
            console.log("File to be uploaded:", req.files.f_Image);

            // Upload the image and get the secure URL
            const result = await uploadImageToCloudinary(req.files.f_Image, process.env.FOLDER_NAME);
            f_Image = result.secure_url; // Store the Cloudinary URL
        }

        // Create a new employee document
        const employee = new Employee({
            f_Id,
            f_Image, // Image URL from Cloudinary
            f_Name,
            f_Email,
            f_Mobile,
            f_Designation,
            f_gender,
            f_Course
        });

        await employee.save();
        res.status(201).json({ msg: 'Employee created successfully', employee });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};


// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body;

    try {
        let f_Image = null;

        // If a new image is uploaded, upload it to Cloudinary
        if (req.files && req.files.f_Image) {
            const file = req.files.f_Image;
            const folder = process.env.FOLDER_NAME || 'default-folder';
            const height = 300;
            const quality = 80;

            const uploadResult = await uploadImageToCloudinary(file, folder, height, quality);
            f_Image = uploadResult.secure_url;
        }

        // Update employee details
        const employee = await Employee.findByIdAndUpdate(id, {
            f_Image,
            f_Name,
            f_Email,
            f_Mobile,
            f_Designation,
            f_gender,
            f_Course
        }, { new: true });

        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }

        res.status(200).json({ msg: 'Employee updated successfully', employee });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};
// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        res.status(200).json({ msg: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};
