import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/quote")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }, []);

  return (
    <div>
      <h1>Quote of the Day</h1>
      {quote ? (
        <div>
          <p>"{quote.quote}"</p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
}

export default App;
