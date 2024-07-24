import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function TitlebarBelowMasonryImageList() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImg(null);
  };

  return (
    <Box sx={{ width: '100%', padding: '0 250px', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleOpen(item.img)}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: 1,
          }}
        >
          <img
            src={currentImg}
            alt=""
            style={{ width: '100%', maxHeight: '80vh', borderRadius: '8px' }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
            {itemData.find(item => item.img === currentImg)?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {itemData.find(item => item.img === currentImg)?.author}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_282264904a5b0591b47e6c4e79377381.jpeg',
    title: 'Photo 1',
    author: 'Author 1',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_7dbe7149bc7061152a2c370502f14596.jpeg',
    title: 'Photo 2',
    author: 'Author 2',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_39ea7b7e317577d060ab727471b06a8c.jpeg',
    title: 'Photo 3',
    author: 'Author 3',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_468a41a962f58703ad057c3d88fff3a7.jpeg',
    title: 'Photo 4',
    author: 'Author 4',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_0926aa79b9558206f9d3df438d57a857.jpeg',
    title: 'Photo 5',
    author: 'Author 5',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_27d6646463d5632bb5df109de18fad3b.jpeg',
    title: 'Photo 6',
    author: 'Author 6',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_282264904a5b0591b47e6c4e79377381.jpeg',
    title: 'Photo 7',
    author: 'Author 7',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_8a1f209d9aafb79a63e99fddb0aa38d1.jpeg',
    title: 'Photo 8',
    author: 'Author 8',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_a864aa423b83b87d7ca25fd35d6c8f12.jpeg',
    title: 'Photo 9',
    author: 'Author 9',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_95c6bdfa9ca43a750a73bc0389f12771.jpeg',
    title: 'Photo 10',
    author: 'Author 10',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_715445d02e4c0de7df0becefe5aadbe4.jpeg',
    title: 'Photo 11',
    author: 'Author 11',
  },
  {
    img: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_3c88a355e7b2ca9f8361ae97a1ab43ec.jpeg',
    title: 'Photo 12',
    author: 'Author 12',
  },
];
