// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>Teddy Sudol is a junior Computer Science major/Music minor. He joined the club in the Spring 2011 semester with the Painter Lee project. Teddy brings a strong programming background to his projects, but hopes to move into other areas such as music. He looks forward to expanding the Magic Circle club with new projects, events and ideas.</p>"
random_text[number++] = "<p>Theodore Sharkey is an expert keyboard-smasher. Each morning upon raising his ocular shutters, his fingers find their way to the beloved home row bumps and begin their daily dance. They dance all day, until the shutters, carefully timed, do shut. And so Thomas Sumor's fingers do briefly cease their flutter, until Laurelin rises again.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);