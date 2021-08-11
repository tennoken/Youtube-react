import React, { useEffect, useState } from 'react';
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
          <li key={videoItem.id} className={styles.li}>
            <img
              src={videoItem.snippet.thumbnails.medium.url}
              alt="thumbnail"
            />
            <h1 className={styles.title}>{videoItem.snippet.title}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VideoList;
