import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeacherCard = ({singleTeacher}) => {

    const {Photo, name, email, number, id} = singleTeacher || {};
    
    return (
        <div className="card w-full bg-base-100 shadow-xl border-2 mx-auto">
            <figure><img src={Photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Number : {number}</p>
                <p>Email : {email}</p>
                <div className="card-actions justify-end">
                    <Link to={`/specificTeacher/:${id}`}  className="btn btn-primary bg-[#226AEF] hover:bg-[#F8A410] border-none text-white">Contact info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTeacherCard;