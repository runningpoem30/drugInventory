const mongoose = require('mongoose');
const Drug = require('./models/Drug'); // Adjust the path if necessary
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


//institute ka ka ek object jisme uska id and name  and uske andar ek aur object jisme you will have medicine ka info 


const seedDrugs = async () => {
  const drugs = [

    {
      name: 'Aspirin',
      batchNumber: 'ASP123',
      manufacturer: 'PharmaCorp',
      manufacturingDate: new Date('2023-01-01'),
      expirationDate: new Date('2025-01-01'),
      quantity: 100,
      storageConditions: 'Cool and dry',
      price: 12.50,
      description: 'Pain reliever'
    },
    {
      name: 'Paracetamol',
      batchNumber: 'PAR456',
      manufacturer: 'HealthPlus',
      manufacturingDate: new Date('2023-02-01'),
      expirationDate: new Date('2025-02-01'),
      quantity: 200,
      storageConditions: 'Room temperature',
      price: 8.00,
      description: 'Fever reducer'
    },
    {
      name: 'Ibuprofen',
      batchNumber: 'IBU789',
      manufacturer: 'MediTech',
      manufacturingDate: new Date('2023-03-01'),
      expirationDate: new Date('2025-03-01'),
      quantity: 150,
      storageConditions: 'Cool and dry',
      price: 10.00,
      description: 'Anti-inflammatory'
    },
    {
      name: 'Amoxicillin',
      batchNumber: 'AMO101',
      manufacturer: 'BioPharma',
      manufacturingDate: new Date('2023-04-01'),
      expirationDate: new Date('2025-04-01'),
      quantity: 75,
      storageConditions: 'Cool and dry',
      price: 15.00,
      description: 'Antibiotic'
    },
    {
      name: 'Cetirizine',
      batchNumber: 'CET202',
      manufacturer: 'WellCare',
      manufacturingDate: new Date('2023-05-01'),
      expirationDate: new Date('2025-05-01'),
      quantity: 120,
      storageConditions: 'Room temperature',
      price: 9.00,
      description: 'Antihistamine'
    },
    {
      name: 'Metformin',
      batchNumber: 'MET303',
      manufacturer: 'GenoMed',
      manufacturingDate: new Date('2023-06-01'),
      expirationDate: new Date('2025-06-01'),
      quantity: 60,
      storageConditions: 'Cool and dry',
      price: 11.00,
      description: 'Anti-diabetic'
    },
    {
      name: 'Lisinopril',
      batchNumber: 'LIS404',
      manufacturer: 'CardioCare',
      manufacturingDate: new Date('2023-07-01'),
      expirationDate: new Date('2025-07-01'),
      quantity: 90,
      storageConditions: 'Cool and dry',
      price: 14.00,
      description: 'Blood pressure medication'
    },
    {
      name: 'Lorazepam',
      batchNumber: 'LOR505',
      manufacturer: 'PharmaGen',
      manufacturingDate: new Date('2023-08-01'),
      expirationDate: new Date('2025-08-01'),
      quantity: 80,
      storageConditions: 'Cool and dry',
      price: 20.00,
      description: 'Anxiolytic'
    },
    {
      name: 'Omeprazole',
      batchNumber: 'OME606',
      manufacturer: 'DigestPlus',
      manufacturingDate: new Date('2023-09-01'),
      expirationDate: new Date('2025-09-01'),
      quantity: 130,
      storageConditions: 'Room temperature',
      price: 13.00,
      description: 'Proton pump inhibitor'
    },
    {
      name: 'Simvastatin',
      batchNumber: 'SIM707',
      manufacturer: 'HeartCare',
      manufacturingDate: new Date('2023-10-01'),
      expirationDate: new Date('2025-10-01'),
      quantity: 110,
      storageConditions: 'Cool and dry',
      price: 18.00,
      description: 'Cholesterol reducer'
    }
  ];

  try {
    // Remove existing drugs
    await Drug.deleteMany({});
    // Insert new drugs
    await Drug.insertMany(drugs);
    console.log('Drugs seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDrugs();
