// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>Oak Landblob is a jumpy Canadian Sandwich. He has been menaced by triangles since the first slice. He is excited to help bake anti-matter and matter to bake help. His pirates are secret. Landblob also mastered the beasts of the conjunctive alphabet.</p>"
random_text[number++] = "<p>George Oakland is a junior Carnival Sweeper. He has been a menace to the Miraculous Triangle since his first year of life. He is excited to help make the cake batter then eaten as both a baker master and secret pirate. George is also a beast master of CONJ's ACB.</p>"
random_text[number++] = "<p>Glen Oakley is a junior Computer Science major. He has been a member of Magic Circle since his first year at TCNJ. He is excited to help make the club better than ever as both a board member and a skilled programmer. Glen is also a board member of TCNJ's ACM. Glen's favorite pony is Rarity.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);