import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { jokesRouter } from './routes/jokes.js'; // Import jokes routes
import { errorHandler } from './middleware/errorHandler.js'; // Import error handling middleware

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
const corsOptions = {
    origin: '*', // Update with your frontend URL in production
    methods: ['GET'], // Specify allowed methods
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send("API Server Running Properly 🐳");
});

// Use jokes routes
app.use('/api/jokes', jokesRouter);

// Error handling middleware
app.use(errorHandler);

// Using the PORT from .env file
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
