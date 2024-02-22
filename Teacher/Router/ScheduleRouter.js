const express = require('express')
const router = express.Router();
const ScheduleController = require('../Controller/ScheduleController');

router.post('/addSched', ScheduleController.addSchedule)
router.get('/getSched', ScheduleController.getSchedule)
router.get('/getSchedbyid/:id', ScheduleController.getScheduleById)
router.put('/updateSched/:id', ScheduleController.update)
router.delete('/deleteSched/:id', ScheduleController.deleteSchedule)

module.exports = router;