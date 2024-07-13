import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'




export const cloudfiles = async (localfilepath) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if(!localfilepath) return null
        
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto'
        })
        console.log('file uploaded to cloudinary', response);
        return response.secure_url

    } catch (error) {
        if (fs.existsSync(localfilepath)) {
            fs.unlinkSync(localfilepath);
        }
        return null
    }
}

