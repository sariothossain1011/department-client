import React, { Fragment, useState } from "react";

import Data from "./Data";
import Video from "./Video";

const CourseSingle = () => {
  const [activeVid, setActiveVid] = useState(
    "https://www.youtube.com/embed/0PfTU9JI6Lg?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ"
  );
  const [actTitle, setActTitle] = useState("GFG POTD 1");
  const [description, setActiveDescription] = useState(
    "We will learn DFS of Graph in this problem"
  );
  const arr = Data;

  return (
    <Fragment>
      <div className=" mx-auto flex flex-row w-11/12 h-full pt-2 gap-6 ">
        <Video link={activeVid} title={actTitle} description={description} />
        <div
          className="w-3/6 shadow-lg shadow-gray-600  
                           overflow-y-scroll flex flex-col  
                           mt-4  border-slate-200  
                           border-2 rounded-lg"
          style={{ height: "min(38vw, 650px)" }}
        >
          {arr.length > 0 ? (
            <details class="dropdown " open>
              <summary class="m-1 btn w-full">
                Principle of digital elechtronic
              </summary>
              <ul class="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {arr.map((e) => {
                  return (
                    <li>
                      <div
                        className="hover:bg-gray-300 p-1 mt-2
                                       border-2 rounded-xl h-2/6  
                                       shadow-xl shadow-gray-300"
                        onClick={() => {
                          setActiveVid(e.link);
                          setActTitle(e.title);
                          setActiveDescription(e.description);
                        }}
                      >
                        <img
                          className=" h-8 w-14 my-2 mx-2 float-left"
                          src={e.img}
                        />
                        <p className=" w-16 font-semibold pl-2 text-sm">
                          {e.title}
                        </p>
                        <p className=" h-8 px-1">{e.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </details>
          ) : (
            ""
          )}

          {arr.length > 0 ? (
            <details class="dropdown ">
              <summary class="m-1 btn w-full">
                Principle of digital elechtronic
              </summary>
              <ul class="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {arr.map((e) => {
                  return (
                    <li>
                      <div
                        className="hover:bg-gray-300 p-1 mt-2
                                       border-2 rounded-xl h-2/6  
                                       shadow-xl shadow-gray-300"
                        onClick={() => {
                          setActiveVid(e.link);
                          setActTitle(e.title);
                          setActiveDescription(e.description);
                        }}
                      >
                        <img
                          className=" h-8 w-14 my-2 mx-2 float-left"
                          src={e.img}
                        />
                        <p className=" w-16 font-semibold pl-2 text-sm">
                          {e.title}
                        </p>
                        <p className=" h-8 px-1">{e.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </details>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <div className="flex flex-col">
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content fl-dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div> */}
    </Fragment>
  );
};

export default CourseSingle;
