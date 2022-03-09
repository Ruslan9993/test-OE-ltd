import axios from 'axios';

import { IPostpPropTypes } from 'app/components/Posts';

export const getPosts = async() => {

    try {
        const response = await axios.get<IPostpPropTypes[]>('https://jsonplaceholder.typicode.com/posts')
        
        return response.data;
    }

    catch(e) {
        console.log(e)
    }
    // const posts = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    // return posts;
}