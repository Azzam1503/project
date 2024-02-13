const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCoudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file is uploaded on cloudinary", response);
    fs.unlinkSync(localFilePath); //remove the locally saved temporary files as the upload operation get failed
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary files as the upload operation get failed
    return null;
  }
};

module.exports = uploadOnCoudinary;
