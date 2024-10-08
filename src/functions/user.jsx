import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/v1/find-user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getUser;
