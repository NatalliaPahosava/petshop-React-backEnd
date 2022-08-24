import express from "express";
import cors from "cors"
import pets from "./mongoConnection.js";

const app=express();
app.use(express.json())
app.use(cors())

const PORT=4000  
app.listen(PORT, ()=>console.log('API running'))

app.get('/', async (req,res)=>{
const allPets= await pets.find().toArray()
console.log(allPets)
res.send(allPets)})


 app.post('/add-pets', async(req,res)=>{
    await pets.insertOne(req.body)
    const allPets=await pets.find().toArray()
    res.send(allPets)
 })


 app.delete('/delete-pets', async(res,req) => {
    await pets.findOneAndDelete(req.query)
    const allPets = await pets.find().toArray()
    res.send(allPets)
 })