import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Search from './components/video_search/search';
import VideoList from './components/video_list/videoList';
import VideoDetail from './components/videoDetail/videoDetail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((item) => {
          setVideos(item);
          setSelectedVideo(null);
        });
    },
    [youtube],
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, [youtube]);

  // console.log(videos);
  return (
    <div className={styles.container}>
      <Search onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </div>
  );
}

export default App;
