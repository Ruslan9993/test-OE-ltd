import React from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IPostPropTypes {
    title: string;
    userId: number;
    id: number;
}

const Post: React.FC<IPostPropTypes> = (props: IPostPropTypes) => {

    const { title, userId, id } = props;

    const isBlue = id % 2 === 0;

    return (
        <div className={cx('root', { root_blue: isBlue})}>
            <p>User id: {userId}</p>
            <p>{title}</p>
        </div>
    )
}

export default Post;