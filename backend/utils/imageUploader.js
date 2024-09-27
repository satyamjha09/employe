const cloudinary = require('cloudinary').v2

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };

  if (height) {
      options.height = height;
  }
  if (quality) {
      options.quality = quality;
  }
  options.resource_type = "auto";

  try {
      return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
      console.error("Error uploading to Cloudinary:", error); // Log Cloudinary error
      throw new Error("Cloudinary upload failed");
  }
};
