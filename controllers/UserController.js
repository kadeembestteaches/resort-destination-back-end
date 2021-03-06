const express = require('express')
const router = express.Router()
const userService = require("../services/UserService");

//Create
router.post("/",userService.createAUser)

//Read ALL 
router.get("/",userService.getUsers)


//READ ONE 

router.get("/:id",userService.getAUser)

//Update

router.put("/:id",userService.updateAUser)


//DELETE
router.delete("/:id",userService.deleteAUser)



module.exports = router