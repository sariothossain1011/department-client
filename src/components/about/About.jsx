import React from 'react'
import about from "../../assets/about.jpg"
const About = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={about}
            alt="Album"
          className='h-96'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About