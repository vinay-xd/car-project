import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Mongodb from './src/mongo/mongoose.js'
import router from './src/router/router.js'



const app = express()
app.use(cors());
dotenv.config()
app.use(express.json())
app.use(express.static('public'))
app.use(router)


Mongodb()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server runing on port ${process.env.PORT}`);
    })
})

