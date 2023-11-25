import React, { Fragment, useRef, useState } from "react";

const CreateVideo = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid mt-7">
        <div className="row">
          <div className="col-md-10 m-auto  mb-4">
            <div className="card shadow">
              <div className="card-body">
                <form class="w-full ">
                  <div class="flex flex-wrap w-full  mb-6">
                    {imageUrl && (
                      <img src={imageUrl} className="w-full h-[400px]" />
                    )}
                    <div class="flex w-full h-52 items-center justify-center bg-grey-lighter">
                      <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">
                          Select a Photo
                        </span>
                        <input
                          type="file"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div class="w-full   mb-6 ">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Video Title
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter Video Title"
                      />
                      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div class="w-full   mb-6 ">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Video Description
                      </label>
                      <input
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-last-name"
                        type="text"
                        placeholder="Enter Video Description"
                      />
                    </div>
                    <div class="w-full   mb-6 ">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Subject ID
                      </label>
                      <input
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       id="grid-last-name"
                        type="text"
                        placeholder="Enter Subject ID"
                      />
                    </div>
                    <div className=" my-10 w-full">
                      <button
                        type="button"
                        className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm  py-2 bg-blue-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0  sm:w-full sm:text-sm"
                      >
                        Create Subject
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateVideo