import multer from 'multer'
import Path from 'path'

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, 'public/images')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '_' + Date.now() + Path.extname(file.originalname))
        }
    })

    const upload = multer({ storage: storage}).array('file', 10)

    export {upload}