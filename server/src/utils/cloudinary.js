import { v2 as cloudinary } from 'cloudinary'
import crypto from 'crypto'
import fs from 'fs'

//for not uploading same file again
const fileHashFun = (filePath) => {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('md5');
        const stream = fs.createReadStream(filePath)

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            resolve(hash.digest('hex'));
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
};

export const cloudfiles = async (localfilepath) => {

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        try {
            if (!localfilepath) return null

            const fileHash = await fileHashFun(localfilepath)
            const searchExpression = `context.hash:${fileHash}`
            const existImage = await cloudinary.search.expression(searchExpression).execute();

            // console.log('existImage.....', existImage);

            if (existImage.resources.length > 0) {
                // console.log('file alredy exist');
                return existImage.resources[0].secure_url;
            }

            const response = await cloudinary.uploader.upload(localfilepath, {
                resource_type: 'auto',
                context: `hash=${fileHash}`
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

