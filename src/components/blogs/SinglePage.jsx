import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "./blog.css";
const SinglePage = () => {
  let { id } = useParams();
  const {
    isLoading,
    isError,
    data: articles,
    error,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      fetch(`https://take-your-smile-server-side.onrender.com/articles/${id}`, {
        method: "GET",
        headers: {
          "content-type": "applicataion/json",
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <div className="h-40 ">"Loading..."</div>;
  }

  if (isError) {
    // return <span>Error: {error}</span>
  }

  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data),
  });
  refetch();
  return (
    <div>
      <div className="font-sans pt-14  container px-5 md:px-10  mx-auto ">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-3 text-center my-5 md:my-10 font-bold text-gray-600">
          {articles?.title}
        </h1>

        <section className=" body-font blog-content">
          <div className="w-full h-auto mx-auto">
            <img src={articles?.image} alt="" className="mx-auto mb-5" />
          </div>
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={sanitizedData(articles?.body)}
          ></div>
        </section>
      </div>
    </div>
  );
};

export default SinglePage;
