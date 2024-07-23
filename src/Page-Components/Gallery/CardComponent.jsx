// // CardComponent.js
// import * as React from 'react';

// const CardComponent = ({ imageUrl, title, date }) => {
//   return (
//     <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//       <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none ">
//         <img
//           src={imageUrl}
//           alt={title}
//         />
//       </div>
//       <div className="p-6">
//         <h4 className="block font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
//           {title}
//         </h4>
//         <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           {date}
//         </p>
//       </div>
      
//     </div>
//   );
// };

// export default CardComponent;

import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ id, imageUrl, title, date }) => {
  return (
    <Link to={`/albums/${id}`}>
      <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none ">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
