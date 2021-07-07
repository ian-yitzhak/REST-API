const express = require('express')
const app = express()
const userRoute = require('./routes/data')


app.use('api', userRoute)