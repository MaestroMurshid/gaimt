import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FaUser, FaLock } from "react-icons/fa";

    
const HomePage = () => {



const handleGenerateClick = () => {
   
};

    return (
        <div className='wrapper'>
            <div>
                <button class='button-64' role="button" onClick={{handleGenerateClick}}><span class="text">Generate</span></button>
            </div>
            <div>
                <button type="submit">My Projects</button>
            </div>
        </div>
    );
};

export default HomePage;

