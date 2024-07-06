import JobCard from "../Networking-Opportunities/JobCard";
import ImageList from "./CustomImageList";
import NewsCard from "../News-Components/NewsCard";
import AchievementList from "./AchievmentList";
import { useLocation, Link } from "react-router-dom";
import JobCarousel from "./JobCarousel";

function Overview() {
   

    const jobs = Array(7).fill({
        type: "Part Time",
        salary: "15k / Mo",
        title: "UI/UX Designer",
        company: "Epic Coders",
        skills: ["UI", "UX", "PHOTOSHOP"],
        description: "We are looking for an experienced UI and UX designer to work on our new projects ..."
    });

    const newsData = [
        {
          title: 'Alumni Award Winners Announced',
          date: '14th Jul, 2023',
          description: 'Our distinguished alumni have been recognized for their outstanding contributions in various fields.',
          image: 'src/assets/medal.png'
        },
        {
          title: 'New Alumni Mentorship Program Launch',
          date: '14th Jul, 2023',
          description: 'We are excited to announce the launch of our new mentorship program, connecting students with experienced alumni.',
          image: 'src/assets/congratulation.png'
        },

      ];

    return (
        <div className="container mx-auto p-4 grid grid-cols-4 gap-6 md:grid-cols-3 mb-12">

            <div className="px-5 bg-white col-span-4 rounded-lg ">
                <h1 className="text-2xl font-bold mt-10 mb-4">News and Events</h1>
                <div className="grid gap-6 grid-cols-2">
                {newsData.map((item, index) => (
                    <NewsCard key={index} {...item} />
                ))}
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg col-span-4 mb-10">
                <h1 className="text-2xl font-bold mt-10 mb-4">Jobs</h1>
                <div className="">
                <JobCarousel jobs={jobs} />
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg mt-10 mb-10 col-span-3">
                <h1 className="text-2xl font-bold mb-4">Achievements</h1>
                <AchievementList/>
            </div>

            <div className=" p-5 justify-centre mt-10 mr-10">
                <h1 className="text-2xl  font-bold mb-4">Our Alumni</h1>
                <ImageList />
            </div>

            <div className="p-5 bg-white col-span-4 colrounded-lg col-span-3 text-center">
            
                <Link 
                    to="/Contact"
                    className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Contact Us
                </Link>
                <Link 
                    to = "/About"
                    className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 ">
                    About Us
                </Link>
            </div>
            
        </div>
    );
}

export default Overview;
