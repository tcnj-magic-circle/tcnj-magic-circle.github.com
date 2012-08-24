// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>After stumbling into the very first Magic Circle meeting in Spring 2010 expecting free snacks (there were none), Steve has despite all odds stuck around to become the club Publicist for the second year in a row. A graphic designer and artist by trade, Steve keeps busy not doing any of that and browsing sports forums instead. Steve very much enjoys the creative process on the rare occasions when he does not completely hate the creative process. He is still waiting for the free snacks.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);