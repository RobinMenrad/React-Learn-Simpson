import axios from "axios";
import "./App.css";
import QuoteCard from "./components/quotecard";
import React, { useState } from "react";

const sampleQuote = {
  quote: "Damn Daniel!",
  character: "Homer",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
};

function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get Quote
      </button>
    </div>
  );
}

export default App;
