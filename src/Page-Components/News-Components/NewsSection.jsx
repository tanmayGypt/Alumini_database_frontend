import React from 'react';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';

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
  {
    title: 'Congratulations "Name" For Qualifying Gate-2023',
    date: '10th Jul, 2023',
    description: 'BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.',
    image: 'src/assets/discussion.png'
  },
  {
    title: 'New Alumni Mentorship Program Launch',
    date: '14th Jul, 2023',
    description: 'We are excited to announce the launch of our new mentorship program, connecting students with experienced alumni.',
    image: 'src/assets/congratulation.png'
  }
];

const NewsSection = () => {
  return (
    <section className="container mx-auto mt-8 mb-10 ">

      <div className="bg-[#518DAF] mt-10 rounded-3xl p-3 overflow-hidden w-1/2 sm:w-1/2 md:w-1/4 h-auto mx-auto">
        <h2 className="text-2xl  text-white text-center ">Latest News</h2>
      </div>

      <div className='mt-10 mb-8 lg:mx-40 md:mx-20  sm:mx-10 mx-10'>
        <SearchBar/>
      </div>
      
      <div className="space-y-6 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>

      <div className="bg-gray-100 mt-10 hover:bg-gray-300 rounded-3xl p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto mx-auto flex justify-center">
    <button type="button" className="text-2xl text-gray-700">
        View More
    </button>
</div>



    </section>
  );
};

export default NewsSection;
