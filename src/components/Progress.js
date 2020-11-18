import React from 'react';
import pic1 from "img/pic1.jpg/";
import Navbar from './Navbar';
import "./Progress.css"

const Progress = () => {
    return (
        <>
            <Navbar />
            <img className="progressImg" src={pic1} alt='con'/>
        </>
    );
};

export default Progress;