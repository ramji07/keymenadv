import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import Connection from './config/db.Connection.js'
import Routes from './Routes/user.Routes.js'
import cors from 'cors'


const app = express()


app.use(express.json())
app.use(cors());


// Define routes
app.use('/api', Routes)


Connection()

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is Running`)
})
