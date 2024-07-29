import React from "react";

const AchievementCard = ({ title, date, description }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 mb-4">
      <div className="flex items-center flex-row mb-4">
        <div className="p-2 rounded-lg overflow-hidden w-1/4">
          <img
            src="https://via.placeholder.com/150"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 w-3/4">
          <h3 className="text-xl font-semibold text-red-600">{title}</h3>
          <p className="text-sm text-gray-500">Posted on {new Date(date).toLocaleDateString()}</p>
          <br />
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
