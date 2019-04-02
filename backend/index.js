import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import siteRoutes from './src/routes/siteRoutes'
import supplyRoutes from './src/routes/supplyRoutes'

const app = express()
const PORT = 5000

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/LOGISTIQdb')

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//router setup
siteRoutes(app)
supplyRoutes(app)

//serving static files
app.use(express.static('public'))

app.get('/', (req, res) =>
    res.send(`Node and Express are running on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
)
