const express = require('express')
const app = express()
const userRoute = require('./routes/data')

require('./db/db')
app.use(express.json());

app.get('/', (req,res)=>{
	res.send('hello')
})


app.use('/api', userRoute)

const port = 3000;
app.listen(3000, ()=> console.log(`app running on ${port}`))