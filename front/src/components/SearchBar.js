import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className="search--labelSearch">Je recherche ...</div>
      <form>
        <input
          className="search--input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="... une ville,un code postale"
        />
      </form>
    </div>
  );
};
