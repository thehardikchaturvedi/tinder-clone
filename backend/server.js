//import dependencies
const express=require('express');
const dotenv =require('dotenv')
const cors =require('cors')
const connectDB =require('./config/db')
const cardRoutes=require('./routes/card')
//app config

const app=express();
const PORT=process.env.port || 4000;
dotenv.config({debug:true})
//db config
connectDB();

//middlewares
app.use(express.json({extented:false}))
app.use(cors())
//api routes
  app.use('/',cardRoutes)

//listen
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})