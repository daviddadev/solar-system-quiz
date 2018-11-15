// Create questions
let questions = [
    new Question("What do call a Meteor that landed on Earth? ", ["Asteroid", "Meteorite"], "Meteorite"),
    new Question("Where is our Solar System located?", ["Milky Way", "Kuiper Belt"], "Milky Way"),
    new Question("Which is NOT a planet?", ["Pluto", "Saturn"], "Saturn"),
    new Question("On which month can you spot a Meteor Shower?", ["August", "June"], "August"),
    new Question("What is the length of the Milky Way?", ["10,000 Km", "100,000 Km"], "100,000 Km"),
    new Question("How long does it take for Earth to travel around the Sun?", ["356 days", "1 year"], "1 year"),
    new Question("What is Marvel's Thor God of?", ["Lightning", "Thunder"], "Thunder"),
    new Question("What are the remains of Comets and Asteroids?", ["Black Holes", "Meteoroids"], "Meteoroids"),
    new Question("About how old is our Galaxy?", ["4.6 Billion Years", "59 Million Years"], "4.6 Billion Years"),
    new Question("There are how many planets in our Solar System?", ["Nine", "Eight"], "Eight")
];

// Create Quiz //
let quiz = new Quiz(questions);

// Display Quiz //
QuizUI.displayNext();