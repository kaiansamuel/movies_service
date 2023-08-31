'use strict'
const database = require('../config/database')
const { ObjectId } = require('mongodb')

async function getAllMovies(){
  const db = await database.connect()
  return db.collection('movies').find().toArray()
}

async function getMoviesById(id){
  const db = await database.connect()
  return db.collection('movies').findOne({ _id: new Object(id) })
}

async function getMoviesPremieres(){
  const monthAgo = new Date()
  monthAgo.setMonth( -1 ) 

  const db = await database.connect()
  return db.collection('movies').find({ dataLancamento: { $gte: monthAgo } }).toArray()
}

module.exports = { getAllMovies, getMoviesById, getMoviesPremieres }