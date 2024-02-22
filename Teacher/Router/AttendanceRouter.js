const express = require('express')
const router = express.Router()
const AttController = require('../Controller/AttendanceController')

router.post('/addAtt', AttController.addAttendance)
router.get('/getAtt', AttController.getAttendance)
router.get('/getAttById/:id', AttController.getAttendanceById)
router.put('/upAtt/:id', AttController.update)
router.delete('/delete/:id', AttController.delete)
module.exports = router