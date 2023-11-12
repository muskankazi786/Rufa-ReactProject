// App.js

import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 className="app-title"> Search Bar Project Using React</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;
