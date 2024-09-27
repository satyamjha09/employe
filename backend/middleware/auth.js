const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.auth = (req, res, next) => {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        if (!token || token === undefined) {
            return res.status(401).json({
                success: false,
                message: 'Token Missing',
            });
        }

        // Verify the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload;  // Assign the token payload (which includes the user role) to req.user
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong, while verifying the token',
            error: error.message,
        });
    }
};

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for admin',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Role is not matching',
        });
    }
};
