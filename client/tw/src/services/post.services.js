import axios from "axios";
const BASE_URL = 'http://localhost:8800/api'

async function getPosts(userId){
    //http://localhost:8800/api/posts/61870155f4b54ecaee33fb3e
    const {data} = await axios.get(BASE_URL + '/posts/' + userId);
    return data
}

export {getPosts}
