const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Controller for user signup
exports.signup = async (req, res) => {
    
    try {

        const { f_userName, f_Pwd, role } = req.body;

        // Check if user exists
        let existingUser = await User.findOne({ f_userName });

        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                msg: 'User already exists' 
            });
        }

        // Log the plain password
        console.log('Input Password:', f_Pwd);

        // Hash the password
        const hashedPassword = await bcrypt.hash(f_Pwd, 10);

        console.log('Hashed Password:', hashedPassword); // Log the hashed password

        // Create new user
        const user = await User.create({
            f_userName,
            f_Pwd: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            msg: 'User registered successfully',
            user: { f_userName, role }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later',
        });
    }
};


// Controller for user login
exports.login = async (req, res) => {
    try {
        const { f_userName, f_Pwd } = req.body;

        if (!f_userName || !f_Pwd) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields',
            });
        }

        const user = await User.findOne({ f_userName });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User is not registered. Please sign up to continue.',
            });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(f_Pwd.trim(), user.f_Pwd);
        console.log('Input Password:', f_Pwd);
        console.log('Stored Hashed Password:', user.f_Pwd);
        console.log('Password Match:', isMatch);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Password is incorrect',
            });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { f_userName: user.f_userName, id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        const options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        res.cookie('token', token, options).status(200).json({
            success: true,
            token,
            user: { f_userName, role: user.role },
            message: 'User login successful',
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Login failed, please try again',
        });
    }
};
