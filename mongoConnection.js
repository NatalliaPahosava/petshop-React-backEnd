import { MongoClient } from 'mongodb'
import { uri } from './credetials.js'

const client = new MongoClient(uri)

const db = client.db('pet-adoption')

const pets = db.collection('pets')

export default pets
