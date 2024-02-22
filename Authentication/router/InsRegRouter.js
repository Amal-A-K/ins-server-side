const express = require('express');
const router = express.Router();
const InsController = require("../controller/InsRegController");

router.post('/regADD', InsController.addINS)
router.get('/getIns', InsController.getINS)
router.get('/getINSbyid/:id', InsController.getINSByid)
router.put('/updateINSbyid/:id', InsController.updateINSbyid)
router.put('/secondupdateINS/:id/:userid', InsController.secondupdateINS)
router.delete('/deleteINSbyid/:id', InsController.deleteINS)
module.exports = router;
