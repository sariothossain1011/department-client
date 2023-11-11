import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SpecificTeacher = () => {
    const {id} = useParams();
    console.log(id);
    

    return (
        <div>
            <p>hi baby this is teacher no {id}</p>
        </div>
    );
};

export default SpecificTeacher;