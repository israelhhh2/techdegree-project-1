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
    year: 2016
  },
  {
    quote: 'There is no talent here, this is hard work. This is an obsession.',
    source: 'Connor Mcgregor',
  },
  {
    quote: 'Sometimes you have to run before you can walk.',
    source: 'Tony Stark',
    citation: 'Iron Man',
    year: 2008
  },
  {
    quote: 'One of the most fascinating lessons i\'ve absorbed about life is that struggle is good.',
    source: 'Joe Rogan'
  },
  {
    quote: 'If something is important enough you should try even if the probable income is faulure.',
    source: 'John Kavanagh',
    citation: 'Win or Learn',
    year: 2016
  }
];

// Will get a random quote from the quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  // Using the randomNumber value to select a random quote
  return quotes[randomNumber];
}

// Test to see if all quotes can be selected
// console.log(getRandomQuote());

// function will add html to display the different quotes
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '';

  html = `<p class="quote"> ${randomQuote.quote} </p>`;
  html += `<p class="source"> ${randomQuote.source} `;

  //Check if the quotes have citation or year property 
  if (randomQuote.citation !== undefined) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year !== undefined) {
    html += `<span class="year">${randomQuote.year}</span></p>`;
  }

  document.querySelector('#quote-box').innerHTML = html;
}


// Will change change quote.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
