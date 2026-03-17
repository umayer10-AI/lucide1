import React, { useState } from 'react';
import Nav from './Nav';
import { Menu, X } from 'lucide-react';


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
      const [c, setC] = useState(false);

      const a = () => {
        setC(c => !c);
      }

      const g = navLinks.map(v => <Nav key={v.id} {...v}></Nav>)

    return (

        <nav className='flex justify-between'>

               <div>
                  <div className='flex gap-3'>
                    <div onClick={a} className='md:hidden'>
                    {
                      c? <X></X> : <Menu></Menu>
                    }
                  </div>
                    <h2>My Navbar</h2>
                  </div>
                  <ul className={`md:hidden text-center bg-amber-200 absolute duration-1000 text-black ${c ? "top-16" : "-top-40"}`}>
                      {g}
                  </ul>

               </div>

            <ul className='hidden md:flex'>
                {
                    g
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;