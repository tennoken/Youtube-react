import { useEffect, useState } from 'react';
import './app.css';
import Search from './components/video_search/search';
import VideoList from './components/video_list/videoList';

function App() {
  const [videos, setVideos] = useState([]);

  const onSearch = (value) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const popularVideoListApiKey =
      process.env.REACT_APP_YOUTUBE_POPULAR_VIDEOLIST_API_KEY;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${popularVideoListApiKey}&type=video&part=snippet&q=${value}&chart=mostPopular&maxResults=25`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId })),
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const popularVideoListApiKey =
      process.env.REACT_APP_YOUTUBE_POPULAR_VIDEOLIST_API_KEY;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${popularVideoListApiKey}&part=snippet&chart=mostPopular&maxResults=25`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  // console.log(videos);
  return (
    <>
      <Search onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
