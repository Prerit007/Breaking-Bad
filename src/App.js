import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import Spinner from "./components/ui/Spinner";
import Grid from "./components/characters/Grid";

const App = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="container">
      <Header />
      <Search />
      <Spinner />
      <Grid />
    </div>
  );
};

export default App;
