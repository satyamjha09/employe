const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    f_sno: { type: String, default: uuidv4, unique: true },
    f_userName: { 
        type: String,
        required: true,
        unique: true
    },
    f_Pwd: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'employee'], // Enum to define roles
        default: 'employee' // Default role is 'employee'
    }
});



const User = mongoose.model('User', UserSchema);

module.exports = User;
