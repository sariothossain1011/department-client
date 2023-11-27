import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(
      "https://department-server-tau.vercel.app/api/v1/find-user",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getUser;
