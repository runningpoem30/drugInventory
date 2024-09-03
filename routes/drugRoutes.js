const Drug = require("../models/Drug")
const mongoose = require("mongoose")
const express = require("express")
const router = express.Router();

const {
  getAllDrugs , 
  getDrugById ,
  createDrug,
  updateDrug,
  deleteDrug
} = require('../controllers/drugController')


//This is the route to get all drugs
router.get('/' , getAllDrugs);

//This is the route to get a drug by id 
router.get('/:id' , getDrugById);

//This is the route to create a new drug
router.post('/' , createDrug)

//This is the route to update and existing drug
router.put("/:id" , updateDrug)

//This is the route to delete a dug
router.delete('/:id' , deleteDrug);

module.exports = router;



