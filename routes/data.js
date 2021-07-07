const express = require('express')

const router = express.Router()

const Person = require('../models/data')

router.get('/user',async (req,res)=>{
	try{

		const person = await Person.find({})
		res.send(person)
	} catch(err){
		res.status(500).send(err) }

	})
app.get('/user/:id', async (req,res)=>{

})

router.post('/user', async (req,res)=>{

	const person = new Person(req.body)

	try{

		await person.save()
		res.status(201).send(person)
	}
	catch(err){

		res.status(400).send(err)}
})

app.patch('/user/:id', async (req,res)=>{

})


app.delete('/user/:id', async (req,res)=>{

})

module.exports = router