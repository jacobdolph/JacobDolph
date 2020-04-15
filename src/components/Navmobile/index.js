import React from 'react';
import { Link } from 'react-router-dom';

function Navmobile() {
    return (

        <ul className="sidenav" id="mobile-demo" style={{ backgroundColor: 'white' }}>
            <li><Link style={{ color: "#37474f" }} className='sidenav-close' to='/'>Home</Link></li>
            <li><Link style={{ color: "#37474f" }} className='sidenav-close' to='/portfolio'>Portfolio</Link></li>
            <li><Link style={{ color: "#37474f" }} className='sidenav-close' to='/about'>About</Link></li>
            <li><Link style={{ color: "#37474f" }} className='sidenav-close' to='/Connect'>Connect</Link></li>
        </ul>


    )
}

export default Navmobile;