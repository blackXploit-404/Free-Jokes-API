// Import the express module
import express from 'express'; // Module Js

// Create an instance of an Express application
const app = express();

// Array of jokes
const jokes = [
    {"joke": "Why don’t scientists trust atoms? Because they make up everything!"},
    {"joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"},
    {"joke": "Why don’t skeletons fight each other? They don’t have the guts."},
    {"joke": "What do you call fake spaghetti? An impasta!"},
    {"joke": "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!"},
    {"joke": "What do you get when you cross a snowman and a vampire? Frostbite."},
    {"joke": "Why did the math book look sad? Because it had too many problems."},
    {"joke": "What do you call cheese that isn't yours? Nacho cheese!"},
    {"joke": "Why was the computer cold? It left its Windows open!"},
    {"joke": "How do you organize a space party? You planet."},
    {"joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one!"},
    {"joke": "What’s orange and sounds like a parrot? A carrot."},
    {"joke": "Why did the bicycle fall over? Because it was two-tired!"},
    {"joke": "What do you call an alligator in a vest? An investigator!"},
    {"joke": "Why don't oysters donate to charity? Because they are shellfish."},
    {"joke": "What did one wall say to the other wall? I’ll meet you at the corner."},
    {"joke": "Why couldn’t the leopard play hide and seek? Because he was always spotted."},
    {"joke": "What do you call a bear with no teeth? A gummy bear."},
    {"joke": "Why did the tomato turn red? Because it saw the salad dressing!"},
    {"joke": "Why did the chicken go to the seance? To talk to the other side."},
    {"joke": "What do you call a factory that makes good products? A satisfactory."},
    {"joke": "Why don’t eggs tell jokes? They’d crack each other up."},
    {"joke": "How does a penguin build its house? Igloos it together."},
    {"joke": "Why did the coffee file a police report? It got mugged."},
    {"joke": "What did the zero say to the eight? Nice belt!"},
    {"joke": "Why did the computer go to the doctor? It had a virus."},
    {"joke": "Why was the broom late? It swept in!"},
    {"joke": "What did the grape do when it got stepped on? Nothing, it just let out a little wine."},
    {"joke": "Why can’t you hear a pterodactyl go to the bathroom? Because the ‘P’ is silent."},
    {"joke": "Why did the girl bring a ladder to the bar? Because she heard the drinks were on the house."},
    {"joke": "What do you call a fish that wears a bowtie? Sofishticated."},
    {"joke": "What do you call a snowman with a six-pack? An abdominal snowman."},
    {"joke": "Why was the math book unhappy? Because it had too many problems."},
    {"joke": "What do you call a fly without wings? A walk."},
    {"joke": "What do you call a dinosaur with an extensive vocabulary? A thesaurus."},
    {"joke": "Why did the cookie go to the hospital? Because it felt crummy."},
    {"joke": "Why don’t you ever see elephants hiding in trees? Because they’re so good at it!"},
    {"joke": "What’s brown and sticky? A stick."},
    {"joke": "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans."},
    {"joke": "How do you make a tissue dance? You put a little boogie in it."},
    {"joke": "What do you call an alligator wearing a vest? An investigator."},
    {"joke": "Why do cows have hooves instead of feet? Because they lactose."},
    {"joke": "What did the fisherman say to the magician? Pick a cod, any cod."},
    {"joke": "What do you call a bear with no ears? B."},
    {"joke": "How do you catch a squirrel? Climb a tree and act like a nut!"},
    {"joke": "What did the janitor say when he jumped out of the closet? Supplies!"},
    {"joke": "Why did the stadium get hot after the game? All of the fans left."},
    {"joke": "Why did the cookie cry? Because his mom was a wafer (away for) so long!"},
    {"joke": "Why can’t you trust stairs? They’re always up to something."},
    {"joke": "What did the left eye say to the right eye? Between you and me, something smells."},
    {"joke": "Why do bees have sticky hair? Because they always use honeycombs."},
    {"joke": "Why did the picture go to jail? Because it was framed!"},
    {"joke": "What do you call a belt made of watches? A waist of time."},
    {"joke": "What did the ocean say to the beach? Nothing, it just waved."}
];

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send("Web Server Running Properly 🐳");
});

// Define a route for getting a random joke
app.get('/api/random/jokes', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

// Define a route for getting all jokes
app.get('/jokes/all', (req, res) => {
    res.json(jokes);
});

// Set the port to listen on
const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
