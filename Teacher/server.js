const express = require('express');
const connect = require('./Mongodb/config');
const cors=require('cors');
const dotenv = require('dotenv');
const app = express();
const bodyparser = require('body-parser');
const Teacherrouter = require('./Router/TeacherRouter')
const Schedulerouter = require('./Router/ScheduleRouter')
const AttRouter=require('./Router/AttendanceRouter')

app.use(cors())
app.use(bodyparser.json());
app.use('/Tchr', Teacherrouter);
app.use('/Sched', Schedulerouter);
app.use('/att',AttRouter);
dotenv.config();
const PORT = process.env.PORT;
connect();
app.listen(PORT, () => {
    console.log(`App listening to the port ${PORT}`);
})