import React from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

const Gallery = () => {
  return (
    <>
      <div className="text-center font-sans font-bold text-[36px] py-4">
        Gallery
      </div>
      <SlideshowLightbox
        className="container grid grid-cols-3 gap-2 mx-auto"
        showThumbnails={true}
      >
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619939/WhatsApp_Image_2023-12-01_at_9.47.39_AM_z6oxhb.jpg"
        />
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619939/WhatsApp_Image_2023-12-01_at_9.47.36_AM_qqxstu.jpg"
        />
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619940/WhatsApp_Image_2023-12-01_at_9.47.32_AM_j66dad.jpg"
        />
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619941/WhatsApp_Image_2023-12-01_at_9.47.46_AM_norcez.jpg"
        />
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619939/WhatsApp_Image_2023-12-01_at_9.47.51_AM_ssoxic.jpg"
        />
        <img
          className="w-full rounded max-h-[300px] object-cover"
          src="https://res.cloudinary.com/duaikhblk/image/upload/v1701619939/WhatsApp_Image_2023-12-01_at_9.47.43_AM_ctypg6.jpg"
        />
  
      </SlideshowLightbox>
    </>
  );
};

export default Gallery;
