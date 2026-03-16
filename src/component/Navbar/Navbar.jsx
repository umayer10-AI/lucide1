import React from 'react';
import Nav from './Nav';


const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                    navLinks.map(v => <Nav key={v.id} {...v}></Nav>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;