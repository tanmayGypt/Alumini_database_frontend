import React, { useState } from 'react';
import LandingPage from '../Page-Components/Gallery/LandingPage';
import Albums from '../Page-Components/Gallery/Albums';
import Videos from '../Page-Components/Gallery/Videos';
import AllPhotos from '../Page-Components/Gallery/AllPhotos';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('albums'); // Default tab is 'albums'

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <LandingPage activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="p-6">
        {activeTab === 'albums' && <Albums />}
        {activeTab === 'videos' && <Videos />}
        {activeTab === 'allPhotos' && <AllPhotos />}
      </div>
    </div>
  );
};

export default Gallery;
