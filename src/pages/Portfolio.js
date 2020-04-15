import React from "react";
import { Col, Row, Container, Img } from '../components/Grid'
import { Link } from 'react-router-dom'
import Mapout from '../components/Mapout'


const Portfolio = () => {



    return (
        <Container  >


            <Row>

                <Col size='s12 m3'>
                    <div className='center' style={{ color: 'white', backgroundColor: 'grey', height: '100%' }}>
                        <Img src='https://jacobdolph.github.io/assets/images/jacob-2.JPG' cAlign circle />
                        <h4>Jacob Dolph</h4>
                        <ul>
                            <Link to='/'><span style={{ color: 'white' }}>Home</span></Link><br /><br />
                            <Link to='/portfolio'><span style={{ color: 'white' }}>Portfolio</span></Link> <br /><br />
                            <Link to='/about'><span style={{ color: 'white' }}>About</span></Link> <br /><br />
                            <Link to='/connect'><span style={{ color: 'white' }}>Connect</span></Link> <br /><br />

                        </ul>
                    </div>


                </Col>

            </Row>




        </Container >
    );
};

export default Portfolio;