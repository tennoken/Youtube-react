import React, { memo } from 'react';

import styles from './videoItem.module.css';

const VideoItem = memo(({ video, onVideoClick }) => {
  return (
    <li className={styles.video} onClick={() => onVideoClick(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        className={styles.img}
        alt="thumbnail"
      />
      <div>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
});

export default VideoItem;
