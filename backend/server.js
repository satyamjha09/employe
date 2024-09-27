require('dotenv').config(); // This should be at the top to load .env variables

const express = require('express');
const connectDB = require('./config/database'); // MongoDB connection
const authRoutes = require('./routes/authRoutes'); // Auth routes
const employeeRoutes = require('./routes/employeeRoutes');
const fileUpload = require('express-fileupload'); // Import express-fileupload
const cors = require('cors');
const { cloudinaryConnect } = require('./config/cloudinary');
cloudinaryConnect();



console.log('Cloudinary API Key:', process.env.API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Middleware to parse incoming JSON data
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers)
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


// Middleware to handle file uploads
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Connect to MongoDB
connectDB();

// Base route
app.get('/', (req, res) => {
    res.send('MERN Auth API is running');
});

// Authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/employee', employeeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
