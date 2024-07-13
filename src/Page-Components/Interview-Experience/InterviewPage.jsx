import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';
import InterviewList from './InterviewList';
import InterviewDetail from './InterviewDetail';
import { setSearchTerm } from '../../features/interviewSlice';

const InterviewExp = () => {
  const searchTerm = useSelector((state) => state.interview.searchTerm);
  const interviews = useSelector((state) => state.interview.interviews);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const filteredInterviews = interviews.filter((interview) =>
    interview.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Dashboard />
        <SearchBar handleSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<InterviewList interviews={filteredInterviews} />}
          />
          <Route
            path="/interview/:id"
            element={<InterviewDetail interviews={interviews} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default InterviewExp;
