// RANDOM TEXT
function random_text()
{};
var random_text = new random_text();
var number = 0;

random_text[number++] = "<p>Alexan Bardcrumble is a Bulgarian gendarme in her third year of service. Since rescuing the Queen of Denmark and Her Majesty's pet Shih Tzu last year, Alexan has traveled the globe in a material journey for physical comfort. She is well known for her various adventures, including the infamous Southern England Crisis, as serialized by her some-time biographer Arthur Woodburyson. Alexan is currently missing after her run-in with her feared nemesis, Professor Dudley Smithers, world-renowned combat botanist. It is hoped by all that she returns unscathed from his vile secret greenhouse, hidden far in the depths of Darkest Africa.</p>"

var random_number = Math.floor(Math.random() * number);

document.write(random_text[random_number]);