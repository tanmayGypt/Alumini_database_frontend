import JobCard from "./JobCard"; // Import JobCard component
import SearchBar from "./SearchBar";
import dashboardImage from "./dashboard.jpg";

function JobsSection() {
  // Mock data for event (replace with actual data or fetch from API)
  const jobs = Array(10).fill({
    type: "Part Time",
    salary: "15k / Mo",
    title: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "PHOTOSHOP"],
    description:
      "We are looking for an experienced UI and UX designer to work on our new projects ...",
  });

  return (
    <div className="py-20">
      {/* Dashboard Section */}
      <header
        className="py-10 h-max w-full relative mt-2"
        style={{
          backgroundImage: `url(${dashboardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-white opacity-15"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="container mx-auto text-center mb-40 mt-10 px-4 sm:px-6 lg:px-8 relative rounded"
          style={{ zIndex: 1 }}
        >
          <h1 className="text-4xl text-black sm:text-4xl md:text-5xl font-bold">
            Job Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
            Explore job opportunities within the alumni network.
          </p>
        </div>
      </header>
      <div className="bg-[#518DAF] mt-10 rounded-3xl p-3 overflow-hidden w-1/2 sm:w-1/2 md:w-1/4 h-auto mx-auto">
        <h2 className="text-2xl text-white text-center">Available Jobs</h2>
      </div>
      <div className="mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        <SearchBar />
      </div>
      {/* Job Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} /> // Use JobCard component
        ))}
      </div>
    </div>
  );
}

export default JobsSection;
