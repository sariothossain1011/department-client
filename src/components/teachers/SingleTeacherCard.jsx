import React from 'react';

const SingleTeacherCard = ({ singleTeacher }) => {
    const { Photo, email, name, number, id } = singleTeacher;
    // console.log(Photo, email, name, number, id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2 mx-auto">
            <figure><img src={Photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Number : {number}</p>
                <p>Email : {email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contact info</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTeacherCard;