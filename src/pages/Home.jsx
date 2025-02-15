import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 20,
          pageToken: pageToken,
          key: 'AIzaSyChsTSvoyPF9d2z78xnHkBeRBFIGoi4U2Q', // Replace with your API key
        },
      });

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setPageToken(response.data.nextPageToken || '');
      setHasMore(!!response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setHasMore(false);
    }
  }, [pageToken]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div className="home-container">
      <h1 className="page-title">Trending Videos</h1>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchVideos}
        hasMore={hasMore}
        loader={<div className="loader">Loading...</div>}
        endMessage={<p className="end-message">No more videos to load</p>}
      >
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;