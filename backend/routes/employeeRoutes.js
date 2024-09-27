const express = require('express');
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
const { auth, isAdmin } = require('../middleware/auth');  // Import the auth and role-checking middleware

const router = express.Router();

// Only admins can create employees
router.post('/createEmployee', auth, isAdmin, createEmployee);  // Protect this route with 'auth' and 'isAdmin' middleware

// Public routes (accessible by all roles)
router.get('/getAllEmployees', auth, getAllEmployees);  // Optionally, add auth to this route if needed
router.get('/getEmployeeById/:id', auth, getEmployeeById);  // Optionally, add auth to this route if needed

// Only admins can update or delete employees
router.put('/updateEmployee/:id', auth, isAdmin, updateEmployee);  // Protect with 'auth' and 'isAdmin'
router.delete('/deleteEmployee/:id', auth, isAdmin, deleteEmployee);  // Protect with 'auth' and 'isAdmin'

module.exports = router;
