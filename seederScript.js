const mongoose = require('mongoose');
const User = require('./models/User'); 
require('dotenv').config();

mongoose.connect(process.env.MONGODB_USER_URL);


const seedUsers = async () => {
  const users = [
    {
      name: 'John Doe',
      institute: 'HealthPlus Clinic',
      position: 'Admin',
      level: 3,
      password: 'hashedPassword1', // Use bcrypt to hash this password before saving
    },
    {
      name: 'Jane Smith',
      institute: 'MediTech Hospital',
      position: 'Facility',
      level: 2,
      password: 'hashedPassword2',
    },
    {
      name: 'Emily Davis',
      institute: 'BioPharma Research',
      position: 'Admin',
      level: 1,
      password: 'hashedPassword3',
    },
    {
      name: 'Michael Brown',
      institute: 'WellCare Pharmacy',
      position: 'Facility',
      level: 2,
      password: 'hashedPassword4',
    },
    {
      name: 'Sarah Wilson',
      institute: 'CardioCare Center',
      position: 'Admin',
      level: 3,
      password: 'hashedPassword5',
    },
    {
      name: 'David Lee',
      institute: 'PharmaGen Labs',
      position: 'Facility',
      level: 1,
      password: 'hashedPassword6',
    },
    {
      name: 'Jessica Taylor',
      institute: 'DigestPlus Clinic',
      position: 'Admin',
      level: 2,
      password: 'hashedPassword7',
    },
    {
      name: 'Daniel Martin',
      institute: 'HeartCare Hospital',
      position: 'Facility',
      level: 3,
      password: 'hashedPassword8',
    },
    {
      name: 'Laura Anderson',
      institute: 'GenoMed Research',
      position: 'Admin',
      level: 1,
      password: 'hashedPassword9',
    },
    {
      name: 'James Thompson',
      institute: 'PharmaCorp International',
      position: 'Facility',
      level: 2,
      password: 'hashedPassword10',
    }
  ];

  try {
    // Remove existing users
    await User.deleteMany({});
    // Insert new users
    await User.insertMany(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedUsers();
