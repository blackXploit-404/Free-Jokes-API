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

// Root route with HTML response
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Free Jokes API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    color: #333;
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                }
                h1 {
                    color: #4CAF50;
                    font-size: 3rem;
                }
                p {
                    font-size: 1.2rem;
                }
                a {
                    color: #4CAF50;
                    text-decoration: none;
                    font-weight: bold;
                }
                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    margin-top: 50px;
                }
                ul {
                    text-align: left;
                    display: inline-block;
                    padding: 0;
                    list-style: none;
                    font-size: 1.1rem;
                }
                li {
                    margin-bottom: 10px;
                }
                footer {
                    margin-top: 40px;
                    font-size: 0.9rem;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to the Free Jokes API! 🃏</h1>
                <p>Your go-to place for random jokes!</p>
                <p>Explore the API endpoints:</p>
                <ul>
                    <li><strong>Get All Jokes</strong>: <a href="/api/jokes/all">/api/jokes/all</a></li>
                    <li><strong>Get All Jokes</strong>: <a href="/api/jokes/all">/api/jokes/hindi</a></li>
                    <li><strong>Get All Jokes</strong>: <a href="/api/jokes/all">/api/jokes/english</a></li>
                    <li><strong>Get a Random Joke</strong>: <a href="/api/jokes/random">/api/jokes/random</a></li>
                    <li><strong>Check API Health</strong>: <a href="/api/health">/api/health</a></li>
                </ul>
                <p>Visit the <a href="https://github.com/blackXploit-404/Free-Jokes-API?tab=readme-ov-file#free-jokes-api">API Documentation</a> for more details.</p>
            </div>
            <footer>
                <p>Made with 💖 by Surajit | <a href="mailto:hello@surajitsen.me">Contact Support</a></p>
            </footer>
        </body>
        </html>
    `);
});

// Health check route to monitor API health
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: "Healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

// Use jokes routes
app.use('/api/jokes', jokesRouter);

// Handle 404 for undefined routes
app.use((req, res, next) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Not Found</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    color: #333;
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                }
                h1 {
                    color: #FF5722;
                    font-size: 3rem;
                }
                p {
                    font-size: 1.2rem;
                }
                a {
                    color: #4CAF50;
                    text-decoration: none;
                    font-weight: bold;
                }
                footer {
                    margin-top: 40px;
                    font-size: 0.9rem;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>404 - Page Not Found 😕</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <p><a href="/">Go back to the homepage</a></p>
            <footer>
                <p>Made with 💖 by Surajit | <a href="mailto:hello@surajitsen.me">Contact Support</a></p>
            </footer>
        </body>
        </html>
    `);
});

// Error handling middleware
app.use(errorHandler);

// Using the PORT from .env file or default to 4000
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
