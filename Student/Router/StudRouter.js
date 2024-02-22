const express = require('express');
const router = express.Router();
const StudController=require('../Controller/StudController');
const StudentSchema = require('../model/StudentSchema');

router.post('/addSTUD',StudController.addStud)
router.get('/getSTUD',StudController.getStud)
router.get('/getById/:id',StudController.getStudById)
router.put('/update/:id',StudController.updateStud)
router.delete('/delete/:id',StudController.deleteStud)

module.exports=router;