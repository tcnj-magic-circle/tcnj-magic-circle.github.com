// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>Tim Honeywell is a senior pursuing a dual major in Computer Science and Interactive Multimedia. He is one of the charter members of the club, but wasn't heavily involved until he started the GRACE project in fall 2011. Tim is unapologetically interested in far too many subjects: AI, graphics, music, game theory, efficiency, and human-computer interaction. He may not be an expert in anything, but he knows how to bring the experts together and get them to make pretty things.</p>"
random_text[number++] = "<p>Tom HomBomb is a double senatorial pursuer. In his interactions with the media, he has managed to astound, confuse, bamboozle, hoodwink and, on one memorable occasion, ascend to the heavens. He lives mostly on a diet of shoots and leaves, though experts are still uncertain of the syntactic and semantic value of such nutrition. He is unapoplectically invested in a farm of many subsets, including but not limited to soy beans. He once interacted with a computer, but he doesn't like to talk about it.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);