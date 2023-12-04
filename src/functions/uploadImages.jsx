import axios, { Axios } from "axios";

export const UploadImages = async (formData) => {
  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/duaikhblk/image/upload`,
      formData,
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
