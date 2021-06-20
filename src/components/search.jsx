import React from "react";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="/images/Youtube_Logo.png"
          alt="Youtube-Logo"
          className={styles.youtubeLogo}
        />
      </a>
      <form action="" method="get">
        <input type="text" placeholder="Search" className={styles.input} />
        <button className={styles.button}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Search;
