import React from 'react';
import { Img } from '../Grid'
function Header() {
    return (
        <div className='center'>
            <Img src='https://jacobdolph.github.io/assets/images/jacob-2.JPG' cAlign circle />
            <h2 className='flow-text' style={{ margin: '3rem 0', fontSize: '4rem' }}><strong>Jacob Dolph</strong></h2>


        </div>
    )
}

export default Header;