import express from 'express';

const router = express.Router();

// Extended jokes data with Hindi, Bengali, and English jokes
const jokes = [
    // English Jokes
    { "language": "English", "joke": "Why don’t scientists trust atoms? Because they make up everything!" },
    { "language": "English", "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { "language": "English", "joke": "Why don’t skeletons fight each other? They don’t have the guts." },
    { "language": "English", "joke": "What do you call fake spaghetti? An impasta!" },
    { "language": "English", "joke": "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!" },
    { "language": "English", "joke": "Why did the math book look sad? Because it had too many problems." },
    { "language": "English", "joke": "Why was the computer cold? It left its Windows open!" },
    { "language": "English", "joke": "What do you call cheese that isn't yours? Nacho cheese!" },
    { "language": "English", "joke": "What do you call a bear with no teeth? A gummy bear." },
    { "language": "English", "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one!" },
    { "language": "English", "joke": "Why did the bicycle fall over? Because it was two-tired!" },
    { "language": "English", "joke": "Why don’t eggs tell jokes? They’d crack each other up." },
    { "language": "English", "joke": "How do you organize a space party? You planet." },
    { "language": "English", "joke": "What did the ocean say to the beach? Nothing, it just waved." },
    { "language": "English", "joke": "What do you call a fish that wears a bowtie? Sofishticated." },
    { "language": "English", "joke": "Why did the cookie cry? Because his mom was a wafer (away for) so long!" },
    { "language": "English", "joke": "Why can’t you trust stairs? They’re always up to something." },
    { "language": "English", "joke": "How does a penguin build its house? Igloos it together." },
    { "language": "English", "joke": "What did the janitor say when he jumped out of the closet? Supplies!" },
    { "language": "English", "joke": "Why did the kid bring a ladder to school? Because she wanted to go to high school." },

    // Hindi Jokes
    { "language": "Hindi", "joke": "टीचर: पंखा क्यों नहीं चल रहा? बच्चा: सर, पंखे को कोरोना हो गया है! टीचर: कैसे? बच्चा: हिल रहा है पर चल नहीं रहा।" },
    { "language": "Hindi", "joke": "पत्नी: ये फोटो किसकी है? पति: ये मेरी जवानी की फोटो है। पत्नी: फिर तो पहचान में ही नहीं आ रहे हो! पति: इसलिए तो अब बड़ा फोटो लगाता हूँ!" },
    { "language": "Hindi", "joke": "डॉक्टर: आपको आराम की सख्त जरूरत है। मरीज: लेकिन मैं बैंक में काम करता हूँ! डॉक्टर: ओह, फिर आराम की भूल ही कर दीजिए!" },
    { "language": "Hindi", "joke": "पत्नी: मुझे गहने खरीदने हैं। पति: बाजार में मंहगाई का बहुत असर है! पत्नी: कोई बात नहीं, कर्ज़ लेकर ही खरीद लेते हैं। पति: फिर सोना या चाँदी में क्या फर्क है?" },
    { "language": "Hindi", "joke": "टीचर: तुम पढ़ते क्यों नहीं हो? \nछात्र: क्योंकि मोबाइल में नेटवर्क नहीं आ रहा सर।" },
    { "language": "Hindi", "joke": "टीचर: बताओ इंसान और कंप्यूटर में क्या अंतर है? \nबच्चा: इंसान अपनी गलती से सीखता है और कंप्यूटर अपनी गलती से हैंग हो जाता है!" },
    { "language": "Hindi", "joke": "पत्नी: शादी के बाद मेरी लाइफ कितनी बदल गई है! \nपति: कैसे? \nपत्नी: पहले मैं बेफिक्री से शॉपिंग करती थी और अब तुम्हारी जेब देखकर!" },
    { "language": "Hindi", "joke": "डॉक्टर: आपको कौन सी बीमारी है? \nमरीज: जी मेरी बीवी मुझसे बात नहीं करती। \nडॉक्टर: ये बीमारी नहीं, ये तो भगवान की कृपा है!" },

    // Bengali Jokes
    { "language": "Bengali", "joke": "গুরু: ছেলে তুই পড়াশোনা করিস না কেন? ছাত্র: গুরু, যেই বইতে প্রশ্ন আছে সেই বইতে উত্তরও আছে, তাই পড়ার দরকার নেই!" },
    { "language": "Bengali", "joke": "বাবা: রেজাল্ট কেমন হল? ছেলে: বাবা, ডাক্তার হতে পারলাম না, কিন্তু রোগী হতেই তো পারলাম!" },
    { "language": "Bengali", "joke": "পিসি: তোর বউ আসছে না কেন? দাদা: একটু সময় দাও, রং সাজছে! পিসি: আহা! রং করে সুন্দর হবার জন্য! দাদা: না, সিঁদুর পরে আসতে!" },
    { "language": "Bengali", "joke": "ছেলে: মা, আমি কিন্তু বড় হয়ে ডাক্তার হতে চাই। মা: না বাবা, তুই তো রোগী হতেই বেশি পারদর্শী!" },
    { "language": "Bengali", "joke": "গুরু: তোকে স্কুলে যেতে বলেছিলাম! \nছাত্র: গিয়েছিলাম গুরু, কিন্তু স্কুল বন্ধ ছিল। \nগুরু: কেন বন্ধ ছিল? \nছাত্র: আমি না গেলে স্কুল খোলে!" },
    { "language": "Bengali", "joke": "ছেলে: বাবা, স্কুলের আজ ক্লাসে গিয়ে দেখি কেউ নেই! \nবাবা: কেন? \nছেলে: আমাকে দেরি হয়ে গেছিল, তাই সবাই ক্লাসে ঢুকেই লুকিয়ে পড়েছে!" },
    { "language": "Bengali", "joke": "মা: তুই কি পরিস্কার জামা পড়েছিস? \nছেলে: মা, পড়েছি কিন্তু অন্যদিকে ময়লা হয়ে গেছে!" }
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

// GET jokes by language (Hindi or Bengali or English)
router.get('/:language', (req, res) => {
    const { language } = req.params;
    const filteredJokes = jokes.filter(joke => joke.language.toLowerCase() === language.toLowerCase());
    if (filteredJokes.length > 0) {
        res.json(filteredJokes);
    } else {
        res.status(404).json({ message: "No jokes found for the specified language." });
    }
});

// Export the router
export { router as jokesRouter };
