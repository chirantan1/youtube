import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: id,
          key: 'AIzaSyChsTSvoyPF9d2z78xnHkBeRBFIGoi4U2Q',
        },
      });
      setVideo(response.data.items[0]);
    };

    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title={video.snippet.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;