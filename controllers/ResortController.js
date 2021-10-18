const express = require('express')
const router = express.Router()
const resortService = require("../services/ResortService.js");

//Create
router.post("/",resortService.createAResort)

//Read ALL 
router.get("/",resortService.getResorts)


//READ ONE 

router.get("/:id",resortService.getAResort)

//Update

router.put("/:id",resortService.updateAResort)


//DELETE
router.delete("/:id",resortService.deleteAResort)



module.exports = router