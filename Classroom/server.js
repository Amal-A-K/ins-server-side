const express=require('express')
const connect=require('./mongodb/config')
const dotenv=require('dotenv')
const app=express()
const bodyparser=require('body-parser')
const classRoomRouter=require('./Router/ClassroomRouter')
const cors=require('cors')

app.use(cors())
app.use(bodyparser.json())
app.use('/ClsRoom',classRoomRouter)
dotenv.config()
const PORT=process.env.PORT
connect()
app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`);
})