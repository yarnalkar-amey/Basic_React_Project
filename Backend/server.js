import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import router from "./Routes/Product.route.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // allow your Vite frontend
app.use(express.json());

// Routes
app.use("/api/products", router);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});

