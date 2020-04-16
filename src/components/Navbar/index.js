import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        })
    }

    render() {
        return (
            <div className='navbar-fixed'>
                <nav className='z-depth-0' style={{ backgroundColor: '#37474f' }}>
                    <div className='nav-wrapper'>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger left"><i className="material-icons" style={{ color: 'white' }}>menu</i></a>
                        <ul id='nav-mobile' className="left hide-on-med-and-down" style={{ margin: '0rem' }} >
                            <li><Link to='/' className='white-text' >Home</Link></li>
                            <li><Link to='/' className='white-text'>Portfolio</Link></li>
                            <li><Link to='/' className='white-text'>About</Link></li>
                            <li><Link to='/' className='white-text'>Connect</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar;