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
  '11a' : '“Do you know why I hate speed, distance and time?”',
  '11b' : '“Because it’s so t = d/s”',
  '12a' : '“How does a Muslim boxer keep his distance?”',
  '12b' : '“Hijabs”',
  '13a' : '“My doctor told me to distance myself from drugs.”',
  '13b' : '“So I bought a six foot straw.”',
  '14a' : '“Why were B and D long distance lovers?”',
  '14b' : '“Because there was a C between them.”',
  '15a' : '“I\'ve built a spice catapult that is capable of seasoning a steak from a distance of 100 yards.”',
  '15b' : '“It\'s a little hard to aim but there\'s no sense crying over every missed steak.”',
  '16a' : '“Everyone is attractive.”',
  '16b' : '“It only depends on their mass and distance between you and the person.”',
  '17a' : '“What type of underwear do long distance runners wear?”',
  '17b' : '“Marathongs”',
  '18a' : '“Where Did The Crazy Distance Runner Go To Run?”',
  '18b' : '“The Psycho-Path.”',
}

function rand(num) {
  return Math.floor(Math.random()*(num));
}

function refreshQuote() {
  let val = rand(Object.values(quotes).length/2)
  quoteArr[0].innerHTML = Object.values(quotes)[(val*2)];
  quoteArr[1].innerHTML = Object.values(quotes)[(val*2)+1];
}
