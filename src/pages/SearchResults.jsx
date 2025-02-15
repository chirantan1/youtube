import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: query,
            maxResults: 20,
            type: 'video',
            key: 'AIzaSyChsTSvoyPF9d2z78xnHkBeRBFIGoi4U2Q', // Replace with your API key
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;