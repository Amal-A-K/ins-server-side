const express = require('express')
const router = express.Router();
const TeachController = require('../Controller/TeacherController')

router.post('/addTeacher', TeachController.addTchr)
router.put('/pushTeacher/:id',TeachController.addTeacher)
router.get('/getTeacher', TeachController.getTchr)
router.get('/getbyid/:id', TeachController.getTchrById)
router.put('/updateTeacher/:id', TeachController.update)
router.put('/updateOneTeacher/:indexid/:teacherid',TeachController.updateOneTeacher)
router.delete('/deleteTchr/:id', TeachController.deleteTeacher)
router.put('/deleteOneTchr/:indexid/:teacherid',TeachController.deleteOneTeacher)

module.exports = router;