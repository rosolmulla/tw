import React, { useState } from 'react'
import Body from '../../components/Body/Body';
import Menu from '../../components/Menu/Menu';

const Home = (props) => {
    const [openPage, setOpenPage] = useState();

    const openPageHandler = (props) => {
        setOpenPage(props);
        console.log(openPage);
    };

    return (
       <div>
           <Body page={openPage}/>
           <Menu onOpenPage={openPageHandler}/>
        </div>
    );
};

export default Home;
