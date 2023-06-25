import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/style.css";
import Cards from "./components/FilterPage/Cards/Cards";
import { getStoragedFlowers } from "./utils/localStorage";
import flowers from "./API/flowers.json";
import Sorting from "./components/FilterPage/Sorting/Sorting/Sorting";
import { flowersSort } from "./utils/SortingAndArrange";
import Arrange from "./components/FilterPage/Sorting/Arrange/Arrange";

function App() {
  const [sort, setSort] = useState("");
  const [mode, setMode] = useState("block");
  const [cards, setCards] = useState(flowersSort(flowers, sort));
  const [favoritesLength, setFavoriteLength] = useState(
    getStoragedFlowers().length
  );

  return (
    <div className="App">
      <Header count={favoritesLength} />
      <div className="container">
        <Sorting sort={sort} setSort={setSort} />
        <Arrange mode={mode} setMode={setMode} />
        <Cards
          cards={cards}
          setCount={() => setFavoriteLength(getStoragedFlowers().length)}
        />
      </div>
    </div>
  );
}

export default App;
