import React from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from './ActionAreaCard';

const InterviewList = ({ interviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {interviews.map((interview) => (
        <Link key={interview.id} to={`/interview/${interview.id}`} className="no-underline p-3">
            <div className=' transform transition duration-300 hover:scale-105 hover:shadow-lg'>
            <ActionAreaCard 
            title={interview.title} 
            content={interview.summary} 
            image={interview.image} 
          />
            </div>
          
        </Link>
      ))}
    </div>
  );
};

export default InterviewList;
