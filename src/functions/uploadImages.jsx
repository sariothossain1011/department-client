import axios from "axios";
const instance = axios.create();

export const UploadImages = async (formData, path, token) => {
    console.log(`formData: ${formData}, path: ${path}, token: ${token} `);
  try {
    const { data } = await instance.post(
      `http://localhost:8080/api/v1/uploadImages`,
      formData,
      { path },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
