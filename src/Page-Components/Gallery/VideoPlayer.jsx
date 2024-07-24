import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className="video-player">
      <button onClick={onClose}>Close</button>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer;
