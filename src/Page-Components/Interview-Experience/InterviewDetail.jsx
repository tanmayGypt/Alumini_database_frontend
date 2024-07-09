import React from 'react';
import { useParams } from 'react-router-dom';
import ActionAreaCard from './ActionAreaCard';

const InterviewDetail = ({ interviews }) => {
  const { id } = useParams();
  const interview = interviews.find((interview) => interview.id === parseInt(id));

  if (!interview) {
    return <div className="p-4">Interview not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-4">
      <div className="p-6 border border-gray-300 rounded-lg lg:w-3/4 md:w-5/6 w-full mx-auto my-4">
        <ActionAreaCard 
          title={interview.title} 
          content={interview.content} 
          image={interview.image} 
        />
      </div>
    </div>
  );
};

export default InterviewDetail;
