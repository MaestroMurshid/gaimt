import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FaUser, FaLock } from "react-icons/fa";
import styles from './button.module.css'
    
const HomePage = () => {

const handleGenerateClick = () => {
   
};

    return (
    <div>
        <div className='wrapper'>
            <div>
                <button class='button-64' role="button" onClick={{handleGenerateClick}}><span class="text">Generate</span></button>
                
                <button clastype="submit">My Projects</button>
            </div>
        </div>
    </div>


    );
};

export default HomePage;

