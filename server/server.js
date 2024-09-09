import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Mongodb from './src/mongo/mongoose.js'
import router from './src/router/router.js'

const corsOptions = {
  origin: 'https://car-project-client.vercel.app', // replace with your frontend's production URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // methods you allow
  credentials: true // Enable Access-Control-Allow-Credentials if needed
};

const app = express()
app.use(cors(corsOptions))
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

