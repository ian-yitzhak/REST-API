const express = require('express')
const app = express()
const userRoute = require('./routes/data')

require('./db/db')


app.use('api', userRoute)

const port = 3000;
app.listen(3000, ()=> console.log(`app running on ${port}`))