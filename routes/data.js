const express = require('express')

const router = express.Router()

const Person = require('../models/data')

router.get('/', (req,res)=>{
	res.send('hello')
})

router.post('/', async (req,res)=>{

	const person = new Person(req.body)

	try{

		await person.save()
		res.status(201).send(person)
	}
	catch(err){

		res.status(400).send(err)

	}
})

module.exports = router