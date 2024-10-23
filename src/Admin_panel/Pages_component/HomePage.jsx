import React from 'react';

const HomePage = () => {
  const sections = [
    { name: "Achievements", path: "/admin/Achievements" },
    { name: "Alumni Directory", path: "/admin/AlumniDirectory" },
    { name: "Jobs", path: "/admin/Jobs" },
    { name: "Login Page", path: "/admin/loginnew" },
    { name: "Networking", path: "/admin/Networking" },
    { name: "News", path: "/admin/News" },
    { name: "Ranklist", path: "/admin/Ranklist" },
    { name: "Request", path: "/admin/requests" },
    { name: "Students", path: "/admin/Student" },

  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.name} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4">{section.name}</h2>
              <p className="text-gray-700 mb-4">Manage and access {section.name} related information and actions.</p>
              <a href={section.path} className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Go to {section.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
