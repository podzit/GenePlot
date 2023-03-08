import { words } from './words.js';

document.getElementById("button").onclick = function() {
    // Random text choice
const joke = {
    subjectChosen: [ words.subject[Math.floor(Math.random() * words.subject.length)] ],
    whoChosen: [ words.who[Math.floor(Math.random() * words.who.length)] ],
    whatChosen: [ words.what[Math.floor(Math.random() * words.what.length)] ]
    };
    document.getElementById("complot").innerHTML = `${joke.subjectChosen} manipulent ${joke.whoChosen} pour ${joke.whatChosen}`; 
};

