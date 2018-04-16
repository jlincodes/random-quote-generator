const quotes = [
  'Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV. - Morty',
  'Listen, Morty, I hate to break it to you but what people call "love" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science. - Rick',
  'Weddings are basically funerals with cake. - Rick',
  'You\'re young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable. - Rick',
  'I turned myself into a pickle. I\'m Pickle Riiiiick! - Rick',
  'Having a family doesn’t mean that you stop being an individual. You know the best thing you can do for the people that depend on you? Be honest with them, even if it means setting them free. - Mr. Meeseeks',
];

const colors = [
 'rgb(191, 63, 63)',
 'rgb(191, 127, 63)',
 'rgb(191, 191, 63)',
 'rgb(63, 191, 63)',
 'rgb(63, 127, 191)',
 'rgb(127, 63, 191)'
];

function getRandomQuote(num) {
  const randomIdx = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIdx].split(' - ');
  const quoteDisplay = document.getElementById('quote');
  const authorDisplay = document.getElementById('author');
  quoteDisplay.innerText = '"' + quote[0] + '"';
  authorDisplay.innerText = '- ' + quote[1];
  const color = getRandomColor(randomIdx);
  const colorChange = document.getElementsByClassName('changeColor');
  for (let i = 0; i < colorChange.length; i ++) {
    colorChange[i].style.backgroundColor = color;
  }
  document.getElementById('main').style.color = color;
}

function getRandomColor(num) {
  return colors[num];
}

window.onload = () => {
  getRandomQuote();
  getRandomColor();
};
