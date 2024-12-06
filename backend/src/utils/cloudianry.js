import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
 
 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilepAth) => {
    try {
        if (!localFilepAth) return null
        //upload to cloudinary
        const response =  await cloudinary.v2.uploader.upload(localFilepAth, {
            resource_type: "auto"
        })
        //file hs been uploaded
        console.log("File is uploaded on cloudinary", response.URL);
        return response
    } catch (error) {
         fs.unlinkSync(localFilepAth) // remove locally saved temp files , as upload got failed.
    }
}

export { uploadOnCloudinary  };