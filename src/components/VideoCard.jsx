import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './VideoCard.css'; // Import the CSS file

const VideoCard = ({ video }) => {
  if (!video || !video.snippet) return null;

  const videoId = video.id.videoId || video.id; // Handle both search and popular videos

  return (
    <Card className="video-card">
      <Link to={`/video/${videoId}`} className="video-link">
        <CardMedia
          component="img"
          height="140"
          image={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="video-thumbnail"
        />
      </Link>
      <CardContent className="video-content">
        <Typography variant="h6" className="video-title">
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" className="video-channel">
          {video.snippet.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;