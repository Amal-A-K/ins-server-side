const express = require("express")
const router=express.Router()
const ClassRoomController=require('../Controller/ClassroomController')

router.post('/createClass',ClassRoomController.addClassRoom)
router.get('/getClassroom',ClassRoomController.getClassRoom)
router.get('/getClassroomById/:id',ClassRoomController.getClassRoomById)
router.put('/updateClassroom/:id',ClassRoomController.updateClassRoom)
router.delete('/deleteClassroom/:id',ClassRoomController.deleteClassRoom)

module.exports=router;