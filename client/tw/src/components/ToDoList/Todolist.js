import React, { useEffect, useState } from 'react';
import axios from "axios";
import Post from '../Post/Post';
import {getPosts} from '../../services/post.services'
import './todolist.css';

const Todolist = (props) => {
    const [ posts, setPosts ] = useState([]);

    useEffect(async ()=>{
    const id = '61870155f4b54ecaee33fb3e'   
    const getPost =await getPosts(id)
    console.log(getPost)
    setPosts(getPost)
    },[]);
          
    return (
        <>

        </>
    );
};

export default Todolist ;
