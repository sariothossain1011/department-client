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
          className="w-full rounded"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </SlideshowLightbox>
    </>
  );
};

export default Gallery;
