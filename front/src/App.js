import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";
import { Cities } from "./components/Cities";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 800);

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
