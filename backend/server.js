const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();
const port = 5000;

app.use(cors());  // Enable CORS

app.get("/quote", (req, res) => {
  const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  ];

  // Send a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
