import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.config.js";
import router from "./Routes/Product.route.js";

const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.use("/api/products", router);

/* ------------------ SERVER ------------------ */
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
