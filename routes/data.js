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
router.get('/user/:id', async (req,res)=>{
	try{
		const person = await Person.findById(req.params.id)
		if(!person){
			return res.status(404).send()
		}
		res.status(200).send(person)
	}catch(err){
		res.status(500).send(err)
	}

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

router.patch('/user/:id', async (req,res)=>{
	let body = req.body
	let id = req.params.id

	try{

		const person  = await Person.findByIdAndUpdate(id, body)
		res.send(person)
	}catch(err){
		res.status(422).send(err)
	}

})


router.delete('/user/:id', async (req,res)=>{

})

module.exports = router