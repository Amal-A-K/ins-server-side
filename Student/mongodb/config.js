const { default: mongoose } = require('mongoose')
// const mongoose = require('mongoose')

async function connect(){

    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Mongodb Connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=connect