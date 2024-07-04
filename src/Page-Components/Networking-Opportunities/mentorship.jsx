// MentorshipProgram.js
import React from 'react';
import { Link } from "react-router-dom";
import background from './background.jpg'; // Import the image
import JobCard from './JobCard'; // Import JobCard component

const MentorshipProgram = () => {

const buttonStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  color: 'white',
  padding: '10rem 35rem',
  borderRadius: '0.375rem',
  border: 'none',
  display: 'inline-block',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  textAlign: 'center',
};

const headingButtonStyle = {
  color: '#518DAF', // Updated color code for the blue part
  padding: '1rem 2rem',
  borderRadius: '0.375rem',
  border: '2px solid #3B708E', // Updated color code for the border
  display: 'inline-block',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '0.5rem',
  fontFamily: 'Abhaya Libre, serif', // Updated font family to Abhaya Libre
};

const jobs = [
  {
    type: 'Part Time',
    salary: '15k / Mo',
    title: 'UI/UX Designer',
    company: 'Epic coders',
    skills: ['UI', 'UX', 'PHOTOSHOP'],
    description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
  },
  {
    type: 'Full Time',
    salary: '20k / Mo',
    title: 'Web Developer',
    company: 'Infracom Ltd.',
    skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
  },
  {
    type: 'Part Time',
    salary: '15k / Mo',
    title: 'UI/UX Designer',
    company: 'Epic coders',
    skills: ['UI', 'UX', 'PHOTOSHOP'],
    description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
  },
];

return (
  <div className="text-center py-16">
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&display=swap');
        body {
          font-family: 'Abhaya Libre', serif;
        }
        h1, p, button {
          font-family: 'Abhaya Libre', serif;
        }
      `}
    </style>
    {/* Mentorship Program Section */}
    <h1 className="text-3xl font-bold mb-4 bg-cyan-600 text-white inline-block py-1.5 px-20 rounded-full">
      Memberships Program
    </h1>
    <p className="text-lg mb-6">
      Engage in our Mentorship Program to connect with experienced alumni who offer guidance, advice, and support in navigating career paths and professional growth.
    </p>
    <p className="text-lg mb-8">
      Become a mentor or find a mentor to guide you in your professional journey.
    </p>
    <div style={buttonStyle} className="relative flex flex-col">
      <button className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-gray-200 rounded-2xl py-2 mb-10 hover:bg-gray-400 text-black text-sm px-10">
        Learn More
      </button>
    </div>

    {/* Job Board Section */}
    <div className="text-center py-16 px-">
      <h1 className="text-3xl font-bold mb-4 bg-cyan-600 text-white inline-block py-1.5 px-20 rounded-full">
        Job Board
      </h1>
      <p className="text-lg mb-8">Explore job opportunities within the alumni network. Post and find jobs here.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} /> // Use JobCard component
        ))}
      </div>
      <Link
        to="/Networking_Opportunities/JobsSection"
        className="mt-10 bg-gray-200 hover:bg-gray-400 py-2 px-6 rounded-full text-lg"
      >
        View More
      </Link>
    </div>
  </div>
);
};

export default MentorshipProgram;
