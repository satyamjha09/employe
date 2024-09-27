const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true, // Parses the connection string
            useUnifiedTopology: true, // Uses the new Server Discover and Monitoring engine
            // useCreateIndex: true, // No longer necessary in Mongoose 6+
            // useFindAndModify: false, // No longer necessary in Mongoose 6+
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
