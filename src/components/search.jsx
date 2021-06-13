import React from "react";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Youtube</h2>
      <form action="" method="get">
        <input type="text" placeholder="Search" className={styles.input} />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Search;
