const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const clientDetailsRoute = require("./routers/clientDetailsRoutes");
const faqRoutes = require("./routers/faqRoutes");
dotenv.config({ path: path.join(__dirname, "config/.env") });

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api", clientDetailsRoute);
app.use("/api", faqRoutes);

module.exports = app;
