import { words } from './words.js';

let possibilities = words.what.length * words.who.length * words.subject.length;
document.getElementById("possible").innerHTML = `Actuellement il y a ${possibilities} possibilités donc toute ressemblance avec une théorie existante ne serait que fortuite.`;

document.getElementById("button").onclick = function() {
    // Random text choice
    const joke = {
        subjectChosen: [ words.subject[Math.floor(Math.random() * words.subject.length)] ],
        whoChosen: [ words.who[Math.floor(Math.random() * words.who.length)] ],
        whatChosen: [ words.what[Math.floor(Math.random() * words.what.length)] ]
    };
    document.getElementById("complot").innerHTML = `${joke.subjectChosen} manipulent ${joke.whoChosen} pour ${joke.whatChosen}.`;
};

