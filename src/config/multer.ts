import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage:multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','temp'),
        filename:(request,file,callback)=>{
            const name = `${crypto.randomBytes(10).toString('hex')}-${file.originalname}`

            return callback(null,name)
        }
    })
}