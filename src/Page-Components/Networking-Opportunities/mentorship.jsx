import React from 'react';

import background from './background.jpg'; // Import the image

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
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4 bg-cyan-600 text-white inline-block py-1.5 px-20 rounded-full">
          Job Board
        </h1>
        <p className="text-lg mb-8">Explore job opportunities within the alumni network. Post and find jobs here.</p>
        <div className="flex justify-center space-x-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-80">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-yellow-500 text-white py-1 px-3 rounded-full text-sm">{job.type}</span>
                <span className="text-gray-500 text-sm">{job.salary}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-blue-500 mb-4">{job.company}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-200 py-1 px-3 rounded-full text-sm">{skill}</span>
                ))}
                <span className="bg-gray-200 py-1 px-3 rounded-full text-sm">+4</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="text-blue-500 hover:text-blue-600 font-bold">View Job</button>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-gray-200 hover:bg-gray-400 py-2 px-6 rounded-full text-lg">View More</button>
      </div>
    </div>
  );
};

export default MentorshipProgram;
