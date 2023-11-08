import React from "react";

const Blog = () => {
  return (
    <div className=" container">
      <div className=" py-12 ">
        <h1 className=" text-titel text-xl mb-3 leading-8">LATEST BLOGS</h1>
        <h3 className=" text-black font-normal">
          There are variations of passages
        </h3>
      </div>

      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Learn English in ease
              <div className="badge badge-secondary">25 jun 2050</div>
            </h2>
            <p>
              There are many Variaons of passages of Lorem Ipsuble, in some by
              injected humour of passages of Lorem Ipsuable
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
