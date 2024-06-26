import React from 'react';

const AchievementCard = ({ title, date, message, imageUrl }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 mb-4">
      <div className="flex items-center flex-row mb-4">
        <div className="p-2 rounded-lg overflow-hidden">
          <img src={imageUrl} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-red-600">{title}</h3>
          <p className="text-sm text-gray-500">Posted on {date}</p>
          <br />
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
