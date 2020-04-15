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


            <div style={{ backgroundColor: '#212121'; }}>
                <a href="#!" className="brand-logo center flow-text" ><h5 style={{ marginTop: '0' }}>Jacob Dolph</h5></a>
                <br />
                <ul className="hide-on-med-and-down" style={{ margin: '1rem' }} >
                    <li><Link to='/' >Home</Link></li><br /><br />
                    <li><Link to='/portfolio' >Portfolio</Link></li><br /><br />
                    <li><Link to='/about' >About</Link></li><br /><br />
                    <li><Link to='/connect'>Connect</Link></li>
                </ul>
            </div>


        )
    }
}

export default Navbar;