
require("dotenv").config(); 
const cloudinary = require("cloudinary").v2;


console.log('Cloudinary API Key:', process.env.API_KEY);

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY, // Check this key
            api_secret: process.env.API_SECRET // Check this key
        });
        console.log("Cloudinary connected successfully!");
    } catch (error) {
        console.error("Error connecting to Cloudinary:", error);
    }
};
