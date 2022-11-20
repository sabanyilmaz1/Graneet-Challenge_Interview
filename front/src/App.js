import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState({});

  useEffect(() => {
    fetch("http://localhost:4200/api/city")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setCities(resData);
      });
  }, [searchTerm]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
