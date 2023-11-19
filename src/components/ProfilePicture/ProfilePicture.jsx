import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../helpers/getCropedImage";
import { UploadImages } from "../../functions/uploadImages";
import { PulseLoader } from "react-spinners";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const ProfilePicture = ({
  setImage,
  image,
  setError,
  pRef,
  picture,
  setPicture,
}) => {
  const [user] = useAuthState(auth);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const slider = useRef(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const zoomOut = () => {
    slider.current.stepDown();
    setZoom(slider.current.value);
  };
  const zoomIn = () => {
    slider.current.stepUp();
    setZoom(slider.current.value);
  };
  const getCroppedImage = useCallback(
    async (show) => {
      try {
        const img = await getCroppedImg(image, croppedAreaPixels);
        if (show) {
          setZoom(1);
          setCrop({ x: 0, y: 0 });
          setImage(img);
        } else {
          return img;
        }
      } catch (error) {
        console.log(error);
      }
    },
    [croppedAreaPixels]
  );
  const updateProfilePic = async () => {
    try {
      setLoading(true);

      let img = await getCroppedImage();
      let blob = await fetch(img).then((b) => b.blob());
      const path = `${user?.displayName}/profile_pictures`;
      let formData = new FormData();
      formData.append("file", blob);
      formData.append("path", path);
      const res = await UploadImages(formData, path, user?.accessToken);
      if (res[0].url) {
        setPicture(res[0].url);
        setImage("")
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      //   setError(error.response.data.message);
    }
  };
  return (
    <div className="postBox update_img">
      <div className="box_header">
        <div className="small_circle" onClick={() => setImage("")}>
          <i className="exit_icon"></i>
        </div>
      </div>

      <div className="update_center">
        <div className="cropper">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            showGrid={false}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="slider">
          <div className="circle_slider hover1" onClick={() => zoomOut()}>
            <i className="minus_icon"></i>
          </div>
          <input
            type="range"
            min={1}
            max={3}
            value={zoom}
            step={0.2}
            ref={slider}
            onChange={(e) => setZoom(e.target.value)}
          />
          <div className="circle_slider hover1" onClick={() => zoomIn()}>
            <i className="plus_icon"></i>
          </div>
        </div>
      </div>
      <div className="flex_up">
        <div
          className="btn bg-[#1F67EE] text-white hover:bg-[#1F67EE] btn-xs"
          onClick={() => getCroppedImage("show")}
        >
          <i className="crop_icon"></i> Crop photo
        </div>
      </div>

      <div className="update_submit_wrap">
        <div className="blue_link" onClick={() => setImage("")}>
          Cancel
        </div>
        <button
          className="blue_btn"
          disabled={loading}
          onClick={() => updateProfilePic()}
        >
          {loading ? <PulseLoader color="#0553E3" size={10} /> : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
