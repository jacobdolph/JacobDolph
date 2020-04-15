import React from "react";
import { Col, Row, Container, Img } from '../components/Grid'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Container  >

            <div className='card large' style={{ margin: '3%', position: 'relative' }}>
                <Row>

                    <Col size='s12 m3'>
                        <div className='center' style={{ color: 'white', backgroundColor: 'grey', height: '100%' }}>
                            <Img src='https://jacobdolph.github.io/assets/images/jacob-2.JPG' cAlign circle />
                            <h4>Jacob Dolph</h4>
                            <ul >
                                <Link to='/'><span style={{ color: 'white' }}>Home</span></Link><br /><br />
                                <Link to='/portfolio'><span style={{ color: 'white' }}>Portfolio</span></Link> <br /><br />
                                <Link to='/about'><span style={{ color: 'white' }}>About</span></Link> <br /><br />
                                <Link to='/connect'><span style={{ color: 'white' }}>Connect</span></Link> <br />

                            </ul>
                        </div>


                    </Col>
                    <Col size='s12 m9'>
                        <div className='center' style={{ backgroundColor: 'white', height: '100%' }}>
                            <div style={{ paddingTop: '6rem' }}>
                                <h1 className='flow-flex' style={{ margin: '0' }}>Web Developer</h1>
                                <br />
                                <div style={{ fontSize: "3rem" }}>
                                    <h6 style={{ padding: "0rem 4rem", color: "#37474f" }}>"Hello, My name is Jacob Dolph, and I am a web developer located in Cottenwood Heights, Ut."</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>

        </Container >
    );
};

export default Home;