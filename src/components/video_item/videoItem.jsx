import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ video }) => {
  // console.log(props.video.snippet.title);
  return (
    <li className={styles.video}>
      <img src={video.thumbnails.medium.url} alt="thumbnail" />
      <div>
        <p className={styles.title}>{video.title}</p>
        <p>{video.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
