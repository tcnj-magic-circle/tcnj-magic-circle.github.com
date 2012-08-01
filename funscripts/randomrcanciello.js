// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>Bobby Canciello is a senior Interactive Multimedia major/Digital Art minor. An original charter member, his love for game design was awakened upon attending his first Global Game Jam in 2011. Considering himself neither pure artist nor programmer, he prefers to walk the line between the two, using his interpersonal and managerial skills to efficiently lead and solidify a group. Though his passion lies in environment creation, he loves nothing more than being in the thick of production—brainstorming mechanics, modeling assets, generating design documents, and guiding a swarm of creative possibilities into one cohesive vision.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);