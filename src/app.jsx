import { useEffect, useState } from 'react';
import './app.css';
import Search from './components/video_search/search';
import VideoList from './components/video_list/videoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then((item) => setVideos(item));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, [youtube]);

  // console.log(videos);
  return (
    <>
      <Search onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
