import React from 'react';
import {Link} from "react-router-dom";
import user from '../../image/user.png'
import './Header.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'logo'}>Movie App</div>
            </Link>
            <div className={'user-image'}><img src={user} alt="hui"/>
            </div>


        </div>
    );
};

export {Header};