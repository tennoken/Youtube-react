import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({ video }) => {
  console.log(video);
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video.id}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
