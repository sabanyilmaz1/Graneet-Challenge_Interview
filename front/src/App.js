import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";
import { Cities } from "./components/Cities";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  //State
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  //Debounce
  const debouncedSearch = useDebounce(searchTerm, 800);

  //Fetch mise à jour avec la recherche
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4200/api/city/${debouncedSearch}`)
      .then((res) => res.json())
      .then((resData) => {
        setCities(resData);
        setIsLoading(false);
      });
  }, [debouncedSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleChange={handleChange}
      />
      <div className="cities--container">
        {isLoading ? (
          "Loading ..."
        ) : (
          <>
            {/* Affichage des villes en deux catégories */}
            <Cities
              title="Ville de métropole"
              cities={cities.metropoleCities}
            />
            <Cities title="Ville d'outre-mer" cities={cities.overseasCities} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
