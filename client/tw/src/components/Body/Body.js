import React, { useState } from 'react'
import './body.css'
import Profile from '../Profile/Profile';
import Sport from '../../pages/Sport/Sport'

const Body = (props) => {
    const [wichPage, setWichPage] = useState('');

    const OpenPage = (props) => {
        setWichPage(props.page);
        console.log(wichPage);
    };

    return(
        <>
        <div className="bodyContainer">
            <div className="bodyPost"><Profile/></div>
            <div className="bodyPost"><Sport/></div>
        </div>
        </>
    );
};

export default Body;
