import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import Prism from "prismjs";
import "./prism.css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-sass";
// Prism CSS Theme
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-solidity";
import "prismjs/components/prism-json";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-r";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-mongodb";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { useQuery } from "@tanstack/react-query";
import "./blog.css";
import Loading from "../loading/Loading";
import axios from "axios";
const SinglePage = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const {
  //   isLoading,
  //   isError,
  //   data: article,
  //   error,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["articles"],
  //   queryFn: () =>
  //     fetch(
  //       `https://department-server-tau.vercel.app/api/v1/find-blog-data/${id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "content-type": "applicataion/json",
  //         },
  //       }
  //     ).then((res) => res.json()),
  // });

  useEffect(() => {
    async function getBlog() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://department-server-tau.vercel.app/api/v1/find-blog-data/${id}`
        );
        if (data.data) {
          console.log(data.data);
          setIsLoading(false);
          setBlog(data.data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.error(error);
      }
    }
    getBlog();
  }, []);
  console.log("data", blog);

  if (isLoading) {
    return (
      <div className="h-40 ">
        <Loading />
      </div>
    );
  }
    setTimeout(() => Prism.highlightAll(), 0);

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

  return (
    <div className="font-sans pt-14  container px-5 md:px-10  mx-auto ">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-3 text-center my-5 md:my-10 font-bold text-gray-600 ">
        {blog && blog.title}
      </h1>

      <section className=" body-font blog-content">
        <div className="w-full h-auto mx-auto">
          {blog && (
            <img
              src={blog.image}
              alt=""
              className="mx-auto mb-5 w-full h-[300px] md:h-[350px]"
            />
          )}
        </div>
        {blog?.body?.length > 0 && (
          <div
            className="text-gray-500 mb-5"
            dangerouslySetInnerHTML={{ __html: parse(blog.body) }}
          ></div>
        )}
      </section>
    </div>
  );
};

export default SinglePage;
