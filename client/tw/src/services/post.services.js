import axios from "axios";
import BASE_URL from '../config'

async function getPosts(id){
    const data = await axios.get(BASE_URL,{userId:id});
    return data
}

export {getPosts}
