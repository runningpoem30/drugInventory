const Drug = require('../models/Drug');

// Controller to place an order to the vendor
exports.orderPlaced = async (req, res) => {
  try {
    const { drug_id, quantity } = req.body;

    const drug = await Drug.findById(drug_id);

    if (!drug) {
      return res.status(404).json({ message: "Drug not found" });
    }

    drug.quantity += quantity; // Increase quantity
    await drug.save();
    res.status(200).json({ message: "Order placed", updatedQuantity: drug.quantity });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};

// Controller to record drug usage by a patient
exports.drugUsed = async (req, res) => {
  try {
    const { drug_id, quantity } = req.body;

    const drug = await Drug.findById(drug_id);

    if (!drug) {
      return res.status(404).json({ message: "Drug not found" });
    }

    // Ensure the quantity doesn't go negative
    if (drug.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient quantity available" });
    }

    drug.quantity -= quantity; // Decrease quantity
    await drug.save();
    res.status(200).json({ message: "Drug used", updatedQuantity: drug.quantity });
  } catch (error) {
    res.status(500).json({ message: "Error recording drug usage", error });
  }
};
