import express from 'express';

const router = express.Router();

// Sample jokes data
const jokes = [
    {"joke": "Why don’t scientists trust atoms? Because they make up everything!"},
    {"joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"},
    {"joke": "What do you get when you cross a snowman and a vampire? Frostbite!"},
    {"joke": "How do you organize a space party? You planet!"},
    {"joke": "Why did the math book look sad? Because it had too many problems."},
    {"joke": "What do you call cheese that isn’t yours? Nacho cheese!"},
    {"joke": "Why couldn’t the bicycle stand up by itself? It was two tired!"},
    {"joke": "What do you call an alligator in a vest? An investigator!"},
    {"joke": "What do you call a pile of cats? A meowtain!"},
    {"joke": "Why did the tomato turn red? Because it saw the salad dressing!"},
    {"joke": "What do you call a fish wearing a crown? A kingfish!"},
    {"joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one!"},
    {"joke": "What do you call a bear with no teeth? A gummy bear!"},
    {"joke": "Why did the computer go to the doctor? Because it had a virus!"},
    {"joke": "What do you call a factory that makes okay products? A satisfactory!"},
    {"joke": "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!"},
    {"joke": "Why did the tomato turn red? Because it saw the salad dressing!"},
    {"joke": "What do you call a factory that makes good products? A satisfactory!"},
    {"joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one!"},
    {"joke": "Why did the computer go to the doctor? Because it had a virus!"},
    {"joke": "What do you call a bear with no teeth? A gummy bear!"},
    {"joke": "What do you call a fish wearing a crown? A kingfish!"},
    {"joke": "What do you call a pile of cats? A meowtain!"},
    {"joke": "Why did the tomato turn red? Because it saw the salad dressing!"},
    {"joke": "What do you call cheese that isn’t yours? Nacho cheese!"},
    {"joke": "Why couldn’t the bicycle stand up by itself? It was two tired!"},
    {"joke": "What do you call an alligator in a vest? An investigator!"},
    {"joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"},
    {"joke": "What do you get when you cross a snowman and a vampire? Frostbite!"},
    {"joke": "How do you organize a space party? You planet!"},
    {"joke": "Why did the math book look sad? Because it had too many problems."},
    {"joke": "Why don’t scientists trust atoms? Because they make up everything!"}

    
];

// GET all jokes
router.get('/all', (req, res) => {
    res.json(jokes);
});

// GET a random joke
router.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

// Export the router
export { router as jokesRouter };
