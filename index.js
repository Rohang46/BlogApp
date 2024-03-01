const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const blog = require("./routes/blog");
// Mount the blog routes under '/api/v1'
app.use("/api/v1", blog);

// Connect with the database
const connectWithDb = require("./config/database");
connectWithDb();

// Define root route
app.get("/", (req, res) => {
    res.send(`<h1>This is the HomePage baby<h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
});
