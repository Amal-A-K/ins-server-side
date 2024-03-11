const express = require('express');
const router = express.Router();
const StudController=require('../Controller/StudController');
const StudentSchema = require('../model/StudentSchema');

router.post('/addSTUD',StudController.addStud)
router.put('/pushSTUD/:id',StudController.addStudent)
router.get('/getSTUD',StudController.getStud)
router.get('/getSTUDById/:id',StudController.getStudByIdForOne)
router.get('/getById/:id',StudController.getStudById)
router.put('/update/:id',StudController.updateStud)
router.put('/updateOneStud/:indexid/:studentid',StudController.updateOneStudent)
router.delete('/delete/:id',StudController.deleteStud)
router.put('/deleteStud/:indexid/:studentid',StudController.deleteStudOne)

module.exports=router;