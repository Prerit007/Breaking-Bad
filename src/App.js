import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import Grid from "./components/characters/Grid";

const App = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      console.log(result.data);
      setItem(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [name]);

  return (
    <div className="container">
      <Header />
      <Search getName={(q) => setName(q)} />
      <Grid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
