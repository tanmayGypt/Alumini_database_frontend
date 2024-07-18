
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import InterviewList from "./InterviewList";
import InterviewDetail from "./InterviewDetail";

import "./InterviewPage.css";

const InterviewExp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInterview, setSelectedInterview] = useState(null);

  // Accessing interviews from Redux store
  const interviews = useSelector((state) => state.interviews.interviews);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInterviewClick = (interview) => {
    setSelectedInterview(interview);
  };

  const handleBackClick = () => {
    setSelectedInterview(null);
  };

  const filteredInterviews = interviews.filter((interview) =>
    interview.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Dashboard />
      <SearchBar handleSearch={handleSearch} />
      {selectedInterview ? (
        <InterviewDetail
          interview={selectedInterview}
          handleBackClick={handleBackClick}
        />
      ) : (
        <InterviewList
          interviews={filteredInterviews}
          handleInterviewClick={handleInterviewClick}
        />
      )}
    </div>
  );
};

export default InterviewExp;