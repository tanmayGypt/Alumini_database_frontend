import React, { useState } from 'react';
import { videosData } from './videosData';
import VideoPlayer from './VideoPlayer';
import './VideoGallery.css'; // Ensure you import the CSS file

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {selectedVideo ? (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      ) : (
        <div className="video-gallery">
          {videosData.map((video) => (
            <div key={video.id} className="video-thumbnail" onClick={() => handleVideoClick(video)}>
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-title">{video.title}</div>
              <div className="video-date">{video.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
