import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllInterviews } from "../../features/interviewSlice";
import ActionAreaCard from "./ActionAreaCard";

const InterviewList = ({ handleInterviewClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards to show at once
  const cardWidthPercentage = 100 / cardsToShow; // Each card occupies 1/3 of the container

  const dispatch = useDispatch();
  const interviews = useSelector((state) => state.interviews.interviews);
  const status = useSelector((state) => state.interviews.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllInterviews());
    }
  }, [status, dispatch]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : interviews.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < interviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          onClick={handlePrevClick}
        >
          &#8249;
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
            width: `${100 * interviews.length}%`,
          }}
        >
          {interviews?.map((interview, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-5"
              style={{ width: `${cardWidthPercentage}%` }}
              onClick={() => handleInterviewClick(interview)}
            >
              <div className="no-underline p-3 cursor-pointer">
                <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  <ActionAreaCard
                    title={interview.title}
                    content={interview.conclusion}
                    image={interview.image}
                    dateTime={interview.dateTime}
                    postedBy={interview.postedBy}
                    role={interview.role}
                  />
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{interview.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          onClick={handleNextClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default InterviewList;
