import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ item }) => {
  return (
    <li className={styles.li}>
      <img src={item.thumbnails.medium.url} alt="thumbnail" />
      <h1 className={styles.title}>{item.title}</h1>
    </li>
  );
};

export default VideoItem;
