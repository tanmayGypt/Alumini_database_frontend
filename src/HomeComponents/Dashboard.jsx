import React from 'react';
import image from './image.jpeg';

function Dashboard() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to the <span className="text-red-600">Abhigyan</span> Alumni Network
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Connecting our graduates, showcasing achievements, and facilitating networking opportunities.
      </p>
      <div className="flex space-x-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Join the Alumni Network
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Search Alumni
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          View Upcoming Events
        </button>
      </div>
    </div>
  );
}

export default Dashboard;



