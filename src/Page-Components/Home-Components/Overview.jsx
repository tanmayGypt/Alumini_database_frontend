import { useState } from "react";
import AchievementCard from "../Alumini-Achievements/AchievementCard";
import JobCard from "../Networking-Opportunities/JobCard";
import ImageList from "./CustomImageList";
import NewsCard from "../News-Components/NewsCard";

function Overview() {
    const [achievements, setAchievements] = useState([
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. ",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "This achievement marks a significant milestone in their academic journey."
        },
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "Celebrating their outstanding performance in GATE-2023."
        }
        // We Can add more achievements here
    ]);

    const jobs = Array(3).fill({
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
        <div className="container mx-auto p-4 grid grid-cols-4 gap-6 md:grid-cols-3">

            <div className="p-5 bg-white col-span-4 rounded-lg ">
                <h1 className="text-2xl font-bold mt-10 mb-4">News and Events</h1>
                <div className="grid gap-6 grid-cols-2">
                {newsData.map((item, index) => (
                    <NewsCard key={index} {...item} />
                ))}
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg col-span-4 mb-10">
                <h1 className="text-2xl font-bold mt-10 mb-4">Jobs</h1>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg mt-10 col-span-3">
                <h1 className="text-2xl font-bold mb-4">Achievements</h1>
                {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={index}
                        title={achievement.title}
                        date={achievement.date}
                        message={achievement.message}
                        imageUrl={achievement.imageUrl}
                        description={achievement.description}
                    />
                ))}
            </div>

            <div className=" p-5 justify-centre mt-10 mr-10">
                <h1 className="text-2xl  font-bold mb-4">Our Alumni</h1>
                <ImageList />
            </div>

            <div className="p-5 bg-white col-span-4 colrounded-lg col-span-3 text-center">
                <button className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Contact Us
                </button>
                <button className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    About Us
                </button>
            </div>
            
        </div>
    );
}

export default Overview;
