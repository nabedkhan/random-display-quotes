// quotes array list
const quotes = [
  {
    quote: "He attacked everything in life with a mix of extraordinary genius and naive incompetence, and it was often difficult to tell which was which.",
    author: "Douglas Adams"
  },
  {
    quote: "The great thing about a computer notebook is that no matter how much you stuff into it, it doesn't get bigger or heavier.",
    author: "Bill Gates"
  },
  {
    quote: "A lot of companies have chosen to downsize, and maybe that was the right thing for them. We chose a different path. Our belief was that if we kept putting great products in front of customers, they would continue to open their wallets.",
    author: "Steve Jobs"
  },
  {
    quote: "I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We've created life in our own image.",
    author: "Stephen Hawking"
  },
  {
    quote: "I have no faith in human perfectability. I think that human exertion will have no appreciable effect upon humanity. Man is now only more active - not more happy - nor more wise, than he was 6000 years ago.",
    author: "Edgar Allan Poe"
  },
  {
    quote: "Conversation should be pleasant without scurrility, witty without affectation, free without indecency, learned without conceitedness, novel without falsehood.",
    author: "William Shakespeare"
  }
];

// HTML selector by getElementById
const generateBtn = document.getElementById('generate-btn');
const quote = document.getElementById('quote');
const author = document.getElementById('quote-author');



//generate button event handler
generateBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNumber].quote;
  author.innerText = quotes[randomNumber].author;
});