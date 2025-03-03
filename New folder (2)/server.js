const express = require("express")
require("dotenv").config()
const cors = require("cors")
const Movie = require("./schema")

const app= express()
app.use(express.json())
app.use(cors())

const port=process.env.PORT

app.get('/movie', async(req,res)=>{
  return res.status(201).json({message:"hello"})
})

app.post('/movie',async(req,res)=>{
  try {
    const {moviename,review,collected} = req.body
    const newmovie = new Movie({moviename,review,collected})
    if(!moviename || !review || !collected){
      return res.status(400).json({message:"not filled"})
    }
    await newmovie.save()
    return res.status(200).json({message:"there",newmovie})
    
    
  } catch (error) {
    console.log(error)  
  }

  
})

const db=async(req,res)=>{
  try {
    await mongoose.connect(process.env.mongodb)
    console.log("mongodb is connected")
    
  } catch (error) {
    console.log(error)
    
  }
}

app.put('/movie/:id',async(req,res)=>{
  const updatedmovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
  try {
    if(!updated){
      return res.status(400).json({message:"data not updated"})
    }
    return res.status(400).json({message:"filling not completed"})
    
  } catch (error) {
    console.log(error)
    
  }
})

app.delete('/movie/:id',async(req,res)=>{
  const deletedmovie= await Movie.findByIdAndDelete(req.params.id,req.body,{new:true})
  try {
    if(!deleted){
      return res.status(400).json({message:"data not there"})
    }
    return res.status(400).json({message:"filling not completed"})
    
  } catch (error) {
    console.log(error)
    
  }

})

app.listen(port,()=>{
  console.log(`connected successfully http://localhost:${port}`)
});