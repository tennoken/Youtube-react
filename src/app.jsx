import { useEffect, useState } from 'react';
import './app.css';
import Search from './components/search';
import VideoList from './components/video_list/videoList';

function App() {
  const [videos, setVideos] = useState([]);

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
      <Search />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
