import React, { useEffect, useState } from 'react';


import { getPosts } from 'server/getPosts';

import Post from 'app/components/Post';
import Spinner from 'app/components/Spinner';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface IPostpPropTypes {
    userId: number,
    id: number,
    title: string,
    body: string,
}


const Posts: React.FC = () => {

    const [posts, setPosts] = useState<IPostpPropTypes[] | undefined>([]);

    useEffect(() => {
        getPosts()
            .then((posts) => setPosts(posts))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(posts?.length === 0) {
        return (
            <Spinner size='xl' />
        )
    }

    return (
        <div className={cx('root')}>    
            {
                posts?.map((post: IPostpPropTypes) => {
                    return (
                        <Post key={post.id} title={post.title} id={post.id} userId={post.userId} /> 
                    )
                })
            }
        </div>
    )
}

export default Posts;
