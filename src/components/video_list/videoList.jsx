import React from 'react';
import VideoItem from '../video_item/videoItem';

import styles from './videoList.module.css';

const VideoList = (props) => {
  // console.log(props);
  return (
    <>
      <ul className={styles.ul}>
        {props.videos.map((videoItem) => (
          <VideoItem key={videoItem.id} video={videoItem.snippet} />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
