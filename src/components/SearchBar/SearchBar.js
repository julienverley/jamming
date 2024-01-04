import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // searchAPI(term);
  };

  return (
    <>
      <div className={styles.SearchBar}>
        <form onSubmit={handleSearch}>
          <input
            className={styles.Input}
            type="text"
            placeholder="Search music from Spotify"
            onChange={handleTermChange}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
