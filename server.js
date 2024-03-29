require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const authroutes = require("./routes/authroutes");
const dataRoutes = require("./routes/dataRoutes");
const setupSwaggerDocs = require("./swaggerConfig");
const auth = require("./middleware/auth"); // Import your authentication middleware

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Setup Swagger Docs
setupSwaggerDocs(app); // Setup Swagger right before your route definitions

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/auth", authroutes);
// Use routes
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
