import React, { memo, useRef } from 'react';
import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="/images/Youtube_Logo.png"
          alt="Youtube-Logo"
          className={styles.youtubeLogo}
        />
      </a>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </header>
  );
});

export default Search;
