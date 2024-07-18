import React from 'react';
import ActionAreaCard from './ActionAreaCard';

const InterviewDetail = ({ interview, handleBackClick }) => {
  return (
    <div className="max-w-3xl mx-auto mt-4">
     
      <div className="p-6 border border-gray-300 rounded-lg lg:w-3/4 md:w-5/6 w-full mx-auto my-4">
        <ActionAreaCard 
          title={interview.title} 
          content={interview.content} 
          image={interview.image} 
          dateTime={interview.dateTime}
          postedBy={interview.postedBy}
          postedInYear={interview.postedInYear}
          role={interview.role}
          campusType={interview.campusType}
          referral={interview.referral}
        />
      </div>
      <button onClick={handleBackClick} className="p-2 mb-4 bg-blue-500 text-white rounded">
        Back
      </button>
    </div>
  );
};

export default InterviewDetail;

