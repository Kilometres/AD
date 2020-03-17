var quoteArr = document.getElementsByClassName('quote');

var quotes = {
  '1a' : '“How is your long distance relationship going?”',
  '1b' : '“So far, so good.”',
  '2a' : '“Why did the bald man paint rabbits on his head?”',
  '2b' : '“Because from a distance, they looked like hare.”',
  '3a' : '“I\'m in a long distance relationship with my boyfriend. He\'s from another nation.”',
  '3b' : '“My Imagination”',
  '4a' : '“Can a Ninja attack you from long distance?”',
  '4b' : '“Shuriken”',
  '5a' : '“If thor throws his hammer a long distance”',
  '5b' : '“Does that make it Mjol-far?”',
  '6a' : '“How do elephants communicate over long distances?”',
  '6b' : '“By elephone.”',
  '7a' : 'Which unit do the undead use to measure distances?”',
  '7b' : '“Graveyards.”',
  '8a' : '“I have a fear of long distances.”',
  '8b' : '“I go to great lengths to avoid them.”',
  '9a' : '“What\'s a couch that you see in the distance?”',
  '9b' : '“A sofar.”',
  '10a' : '“Why is North Korea so accurate at measuring microscopic distances?”',
  '10b' : '“They have a supreme ruler”',
}

function rand(num) {
  return Math.floor(Math.random()*(num));
}

function refreshQuote() {
  let val = rand(Object.values(quotes).length/2)
  quoteArr[0].innerHTML = Object.values(quotes)[(val*2)];
  quoteArr[1].innerHTML = Object.values(quotes)[(val*2)+1];
}
