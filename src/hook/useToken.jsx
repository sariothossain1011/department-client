import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const image = user?.user?.photoURL;

    let currentUser;
    if (image) {
      currentUser = { email, name, image, role: "user" };
    } else {
      currentUser = { email, name, role: "user" };
    }

    if (email) {
      fetch(`https://department-server-tau.vercel.app/api/v1/Registration`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data?.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
