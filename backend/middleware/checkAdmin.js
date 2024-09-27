const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAdmin = async (req, res, next) => {
    
    try {
        // Get the token from the headers (Bearer token)
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized, no token provided' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Check if the user is an admin
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied, admin only' });
        }

        // Store user info in the request object for future use
        req.user = user;
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error('Error in checkAdmin middleware:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = checkAdmin;
