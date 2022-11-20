import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";
import { Cities } from "./components/Cities";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:4200/api/city")
      .then((res) => res.json())
      .then((resData) => {
        setCities(resData);
      });
  }, [searchTerm]);
  console.log(cities);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="cities--container">
        <Cities title="Ville de métropole" cities={cities.metropoleCities} />
        <Cities title="Ville d'outre-mer" cities={cities.overseasCities} />
      </div>
    </div>
  );
}

export default App;
