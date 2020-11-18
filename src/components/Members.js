import React from 'react';
import char1 from "img/pro2.jpg/";
import char2 from "img/zero2.jpg";
import Navbar from './Navbar';
import "./Members.css"

const Member = () => {
    return (
        <>
            <Navbar />
            <img className="memberImg" src={char1} alt='character1'/>
            <img className="memberImg" src={char2} alt='character2'/>
            
        </>
    );
};

export default Member;