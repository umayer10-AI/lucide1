import React from 'react';

const Nav = ({name,path}) => {
    return (
        <div>
            <li className='mr-10'><a href={path}>{name}</a></li>
        </div>
    );
};

export default Nav;