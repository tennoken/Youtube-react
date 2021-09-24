import React from 'react';
import VideoItem from '../video_item/videoItem';

import styles from './videoList.module.css';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <>
      <ul className={styles.ul}>
        {videos.map((videoItem) => (
          <VideoItem
            key={videoItem.id}
            video={videoItem}
            onVideoClick={onVideoClick}
          />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
