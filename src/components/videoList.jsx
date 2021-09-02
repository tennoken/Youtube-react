import React, { useEffect, useState } from 'react';
import VideoItem from './videoItem';

import styles from './videoList.module.css';

const popularVideoListApiKey =
  process.env.REACT_APP_YOUTUBE_POPULAR_VIDEOLIST_API_KEY;

const VideoList = () => {
  const [popularVideoList, setPopularVideoList] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${popularVideoListApiKey}&part=snippet&chart=mostPopular&maxResults=25`,
    )
      .then((res) => res.json())
      .then((data) => setPopularVideoList(data.items));
  }, []);

  console.log(popularVideoList);

  return (
    <>
      <ul className={styles.ul}>
        {popularVideoList.map((videoItem) => (
          <VideoItem key={videoItem.id} item={videoItem.snippet} />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
