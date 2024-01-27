import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost/apps/blog_hub/",
    headers:{
        'Authorization':'Bearer 1234osborn' 
    }
})