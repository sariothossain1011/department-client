import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleTeacherCard = ({ singleTeacher }) => {
    const { Photo, email, name, number, id } = singleTeacher;
    // console.log(Photo, email, name, number, id);
    const handleDetails = () =>{
        console.log(id);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl border-2 mx-auto">
            <figure><img src={Photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Number : {number}</p>
                <p>Email : {email}</p>
                <div className="card-actions justify-end">
                    <Link to={`/specificTeacher/:${id}`} onClick={()=>handleDetails(Photo, email, name, number, id)} className="btn btn-primary bg-[#226AEF] hover:bg-[#F8A410] border-none text-white">Contact info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTeacherCard;