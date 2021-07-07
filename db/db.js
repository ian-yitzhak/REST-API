const mongoose = require('mongoose')

mongoose.connect(
	"mongodb+srv://ian_test:<Password>@db.qfm7u.mongodb.net/DATABSENAME?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  }

	)
.then(()=> console.log('Connected successfully'))
.catch((err)=> console.log(err))

//use your mongo db credentials

