import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import ProfilePicture from "./ProfilePicture";
import "./style.css";
const Picture = ({ pRef,  register, picture, setPicture }) => {
  const { user } = useAuthState(auth);
  const popup = useRef(null);
  // useClickOutside(popup, () => setShow(false));
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    let file = e.target.files[0];
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/gif" &&
      file.type !== "image/webp"
    ) {
      setError(`${file.name}  format is not supported`);
      return;
    } else if (file.size === 1024 * 1024 * 2) {
      setError(`${file.name}  is too large max 2mb allowed`);

      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImage(event.target.result);
    };
  };
  return (
    <div className="">
      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleImage}
        accept="image/jpeg, image/png, image/gif, image/webp"
      />
      {error && (
        <div className="postError comment_error">
          <div className="postError_error text-red-500">{error}</div>
          <button
            type="submit"
            className="btn-primary"
            onClick={() => setError("")}
          >
            Try again
          </button>
        </div>
      )}
      <div className="postBox pictureBox" ref={popup}>
        <div
          className="update_picture_wrap"
          onClick={() => inputRef.current.click()}
        >
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-[#0A57E5]"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex">
                <label className="relative cursor-pointer  rounded-md  px-3 py-2">
                  <span className="font-mono text-[#0A57E5]">
                    Upload a Photo
                  </span>
                  {/* <input
                    type="file"
                    accept="image/jpeg, image/png, image/gif, image/webp"
                    id="file-upload"
                    className="sr-only"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "image is required*",
                      },
                    })}
                  /> */}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {image && (
        <ProfilePicture
          setImage={setImage}
          image={image}
          setError={setError}
          pRef={pRef}
          picture={picture}
          setPicture={setPicture}
        />
      )}
    </div>
  );
};

export default Picture;
