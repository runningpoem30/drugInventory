const Drug = require('../models/Drug'); // Import the Drug model

// Get all drugs
exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drugs', error });
  }
};

// Get drug by ID
exports.getDrugById = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) return res.status(404).json({ message: 'Drug not found' });
    res.status(200).json(drug);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drug', error });
  }
};

// Create a new drug
exports.createDrug = async (req, res) => {
  try {
    const newDrug = new Drug(req.body);
    const savedDrug = await newDrug.save();
    res.status(201).json(savedDrug);
  } catch (error) {
    res.status(400).json({ message: 'Error creating drug', error });
  }
};

// Update an existing drug
exports.updateDrug = async (req, res) => {
  try {
    const updatedDrug = await Drug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDrug) return res.status(404).json({ message: 'Drug not found' });
    res.status(200).json(updatedDrug);
  } catch (error) {
    res.status(400).json({ message: 'Error updating drug', error });
  }
};

// Delete a drug
exports.deleteDrug = async (req, res) => {
  try {
    const deletedDrug = await Drug.findByIdAndDelete(req.params.id);
    if (!deletedDrug) return res.status(404).json({ message: 'Drug not found' });
    res.status(200).json({ message: 'Drug deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting drug', error });
  }
};