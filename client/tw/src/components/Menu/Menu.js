import React , { useState } from 'react'
import './menu.css'
import { Kitchen, PersonPin, Sports } from '@material-ui/icons';

const Menu = (props) => {
    const [enteredSportPage, setEnteredSportPage] = useState('');

    const sportPageHandler = () =>{
        setEnteredSportPage('SportPage');
        props.onOpenPage(enteredSportPage);
    };

    return (
        <div className="bottombarContainer">
            <div className="bottombarLeft">
                <span className="food"><Kitchen/></span>
            </div>
            <div className="bottombarCenter">
                <span className="home"><PersonPin/></span>
            </div>
            <div className="bottombarRight">
                <span className="sport" onClick={sportPageHandler}><Sports/></span>
            </div>
        </div>
    );
};

export default Menu;
