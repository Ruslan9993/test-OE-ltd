import React from 'react';

import IWithClassName from 'app/types/IWithClassName';

import styles from './styles.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

interface ISpinnerPropTypes extends IWithClassName {
    size?: 'xs' | 'l' | 'xl';
}

const Spinner: React.FC<ISpinnerPropTypes> = (props: ISpinnerPropTypes) => {

    const { className, size } = props;

    return (
        <div className={cx('root', `root_size_${size}`, className)} />
    )
}

Spinner.defaultProps = {
    size: 'xs'
}

export default Spinner;