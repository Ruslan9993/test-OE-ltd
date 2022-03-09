import React from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

import Posts from 'app/components/Posts';

const cx = classNames.bind(styles);

const App: React.FC = () => {
    return (
        <div className={cx('root')}>
            <Posts />
        </div>
    )
}

export default App;