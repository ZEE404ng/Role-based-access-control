const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
//const 


const app = express();

//Middleware

app.use(express.json());

dbConnect();
//Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", userRoutes)

//Start the server
const PORT = process.env.PORT || 7005;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});