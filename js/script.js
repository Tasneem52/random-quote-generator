/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
  An array to represent quotes which includes properties such as quote, source,
  citation and year. The properties citation and year can be optional.
***/
var quotes = [
  { quote: "I find that the harder I work, the more luck I seem to have.",
    source: "Thomas Jefferson ",
    year: 1743
  },
  { quote: "The secret of geeting ahead is getting started.",
    source: "Mark Twain",
  },
  { quote: "Success is a lousy teacher. It seduces smart people into thinming they can't lose.",
    source: "Bill Gates",
  },
  { quote: "The fruit of love is service which is compasson in action.",
    source: "Mother Teresa",
    citation: "Everyday power",
  },
  { quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie ",
    citation: "Twitter ",
    year: 2016
  }
]

/***
  A function to get a random quote object from quotes array
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  A function to create and display an HTML template for a random quote.
***/
function printQuote() {
  var selectedQuote = getRandomQuote();
  var htmlContent = '';
  htmlContent += `<p class="quote">${selectedQuote.quote}</p>`;
  htmlContent += `<p class="source">${selectedQuote.source}`;
  if (selectedQuote.citation) {
    htmlContent += `<span class="citation">${selectedQuote.citation}</span>`;
  } else {
    htmlContent += '';
  }
  if (selectedQuote.year) {
    htmlContent += `<span class="year">${selectedQuote.year}</span>`;
  } else {
    htmlContent += '';
  }
  htmlContent += '</p>'
  document.getElementById('quote-box').innerHTML = htmlContent;
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
