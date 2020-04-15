import React, { Component } from 'react';
import Navmobile from '../Navmobile';
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
            <nav className='z-depth-0 sticky' style={{ backgroundColor: 'white' }}>
                <div className='nav-wrapper'>
                    <div style={{ backgroundColor: 'white' }}>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" style={{ color: '#212121' }}>menu</i></a>
                        <ul className="hide-on-med-and-down" style={{ margin: '1rem', color: '#212121' }} >
                            <li><Link to='/' >Home</Link></li><br /><br />
                            <li><Link to='/portfolio' >Portfolio</Link></li><br /><br />
                            <li><Link to='/about' >About</Link></li><br /><br />
                            <li><Link to='/connect'>Connect</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;