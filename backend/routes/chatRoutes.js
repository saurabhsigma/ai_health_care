import express from "express";
import { CohereClient } from "cohere-ai";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const router = express.Router();

// Initialize CohereClient with API key from .env
const cohere = new CohereClient({ apiKey: process.env.COHERE_API_KEY });

router.post("/", async (req, res) => {
    try {
        const { userMessage } = req.body;

        const response = await cohere.generate({
            model: "command",
            prompt: userMessage,
            maxTokens: 100,
        });

        res.json({ reply: response.generations[0].text });
    } catch (error) {
        console.error("Error in AI response:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

export default router;
