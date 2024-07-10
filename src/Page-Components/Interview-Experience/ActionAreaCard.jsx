// import React from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const ActionAreaCard = ({ title, content, image }) => {
//   return (
//     <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-4">
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <img className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-center" src={image} alt={title} />
//         <div className="p-4">
//           <h2 className="font-bold text-xl sm:text-2xl mb-2">{title}</h2>
//           <div className="quill-readonly prose" dangerouslySetInnerHTML={{ __html: content }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActionAreaCard;

// import React from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const ActionAreaCard = ({ title, dateTime, postedBy, postedInYear, role, campusType, referral, content, image }) => {
//   return (
//     <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-4">
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <img className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-center" src={image} alt={title} />
//         <div className="p-4">
//           <div className="quill-readonly">
//             <p><strong>Date/Time:</strong> {dateTime}</p>
//             <p><strong>Posted By:</strong> {postedBy}</p>
//             <p><strong>Posted In Year:</strong> {postedInYear}</p>
//             <p><strong>Interview Experience for:</strong> {role}</p>
//             <p><strong>On/Off Campus:</strong> {campusType}</p>
//             <p><strong>Referral:</strong> {referral}</p>
//           </div>
//           <h2 className="font-bold text-xl sm:text-2xl my-2">{title}</h2>
//           <div className="quill-readonly prose" dangerouslySetInnerHTML={{ __html: content }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActionAreaCard;

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ActionAreaCard = ({ title, content, image, dateTime, postedBy, postedYear, role, campusType, referral }) => {
  return (
    <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-center" src={image} alt={title} />
        <div className="p-4">
          <h2 className="font-bold text-xl sm:text-2xl mb-2">{title}</h2>
          <div className="quill-readonly prose" dangerouslySetInnerHTML={{ __html: content }} />

          {/* Render additional details only if provided */}
          {dateTime && (
            <p>
              <strong>Date/Time:</strong> {dateTime}
            </p>
          )}
          {postedBy && (
            <p>
              <strong>Posted By:</strong> {postedBy}
            </p>
          )}
          {postedYear && (
            <p>
              <strong>Posted In Year:</strong> {postedYear}
            </p>
          )}
          {role && (
            <p>
              <strong>Interview Experience for:</strong> {role}
            </p>
          )}
          {campusType && (
            <p>
              <strong>On/Off Campus:</strong> {campusType}
            </p>
          )}
          {referral && (
            <p>
              <strong>Referral:</strong> {referral}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionAreaCard;

