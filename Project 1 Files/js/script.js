/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Creating Array that store quote objects. 

let quotes = [
  {
    quote: 'Only those who never stand up never fall down.',
    source: 'John Kavanagh',
    citation: 'Win or Learn',
    year: 2016,
    tags: ['#Motivation', '#MMA', '#Coaching', '#lit']
  },
  {
    quote: 'There is no talent here, this is hard work. This is an obsession.',
    source: 'Connor Mcgregor',
    tags: ['#Gym', '#MMA', '#UFC', '#thenotoriousmma']
  },
  {
    quote: 'Sometimes you have to run before you can walk.',
    source: 'Tony Stark',
    citation: 'Iron Man',
    year: 2008,
    tags: ['#Marvel', '#mcu', '#avengers', '#robertdowneyjr']
  },
  {
    quote: 'One of the most fascinating lessons i\'ve absorbed about life is that struggle is good.',
    source: 'Joe Rogan',
    tags: ['#life', '#MMA', '#funny', '#podcast']
  },
  {
    quote: 'If something is important enough you should try even if the probable income is faulure.',
    source: 'Elon Musk',
    tags: ['#entrepreneur', '#tesla', '#spaceX', '#capitalism']
  }
];


// Will get a random quote from the quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


// function will add html to display the different quotes
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '';

  //Print Quote and Source
  html = `<p class="quote"> ${randomQuote.quote} </p>`;
  html += `<p class="source"> ${randomQuote.source} `;

  //Check if the quotes have citation or year property 
  if (randomQuote.citation !== undefined) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year !== undefined) {
    html += `<span class="year">${randomQuote.year}</span></p>`;
  }

  // Print Tags
  html += `<p class="quote-tags"><span>${randomQuote.tags.join(' ')} </span></p>`

  document.querySelector('#quote-box').innerHTML = html;
  changeColor();

  resetTimer();
}



// code adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
// Change color of Background
function changeColor() {
  //code
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${r},${g},${b})`;
  //Selecting body element
  document.body.style.backgroundColor = randomColor;
}

// Set the timer to change quote every 10 seconds
let timer = setInterval(printQuote, 10000);
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(printQuote, 10000);
}

// Will change the quote when button is pressed.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


