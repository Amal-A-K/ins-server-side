const express = require('express');
// const axios=require('axios')
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
const connect = require('./mongodb/config');
const InsRouter = require('./router/InsRegRouter');
const userrouter = require('./router/UserRouter');

const bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.json())
app.use('/user', userrouter)


app.use('/ins', InsRouter)

dotenv.config();
const PORT = process.env.PORT;
connect();
app.listen(PORT, () => {
    console.log(`app listening to port ${PORT}`);
})