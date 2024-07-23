// // Albums.js
// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import CardComponent from './CardComponent';


// const cardDataArray = [
//     {
//       imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//       title: 'Alumni Reuniun 24',
      
//       date: '5 photos',
//     },
//     {
//         imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         title: 'Alumni reunion 22',
        
//         date: '8 photos',
//       },
//       {
//         imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         title: 'Mentorship session by Raj Mehta',
       
//         date: 'January 10',
//       },
//       {
//         imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         title: 'UI/UX Review Check',
       
//         date: 'January 10',
//       },
//       {
//         imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         title: 'UI/UX Review Check',
        
//         date: 'January 10',
//       },
//       {
//         imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         title: 'UI/UX Review Check',
        
//         date: 'January 10',
//       },
// ]



// export default function Albums() {
//     return (
//       <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {cardDataArray.map((cardData, index) => {
//           return (
//             <div key={index}>
              
//                 <CardComponent {...cardData} />
              
//             </div>
//           );
//         })}
//       </div>
//     );
//   }


// Albums.js
import React from 'react';
import CardComponent from './CardComponent';

const albums = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    title: 'Alumni Reuniun 24',
    date: '5 photos',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    title: 'Alumni reunion 22',
    date: '8 photos',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    title: 'Mentorship session by Raj Mehta',
    date: 'January 10',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    title: 'UI/UX Review Check',
    date: 'January 10',
  },
  // Add more album objects with unique ids and photos arrays here
];

export default function Albums() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <CardComponent key={album.id} {...album} />
      ))}
    </div>
  );
}
