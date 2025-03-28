import dotenv from "dotenv";
dotenv.config(); // Load environment variables at the top

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chatRoutes.js"; // Ensure correct import

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.error("❌ MongoDB connection error:", error));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
