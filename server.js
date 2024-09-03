const express = require("express");
const app = express();
const mongoose = require("mongoose")
const model = require("./models/Drug")
const dotenv = require("dotenv")
const drugRoutes = require("./routes/drugRoutes")
const orderRoutes = require("./routes/orderRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config({})

const PORT = 8000;




mongoose.connect(process.env.MONGODB_URL)
app.use(express.json());
app.use('/api/drugs' , drugRoutes)
app.use('/api/orders' , orderRoutes)
app.use('/api/users' , userRoutes)

app.listen(PORT , () => {
  console.log("Port is connected to 8000")
})


