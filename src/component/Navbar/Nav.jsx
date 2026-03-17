import React from 'react';

const Nav = ({name,path}) => {
    return (
            <li className='px-3 lg:px-0 hover:bg-amber-400 lg:mr-10'><a href={path}>{name}</a></li>
    );
};

export default Nav;