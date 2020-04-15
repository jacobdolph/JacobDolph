import React from "react";
import { Col, Row, Container, Img } from '../components/Grid'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";


const Home = () => {
    return (
        <Container  >
            <Navbar />
            <Navmobile />
            <Row>

                <Col size='s12'>
                    <div className='center'>
                        <Img src='https://jacobdolph.github.io/assets/images/jacob-2.JPG' cAlign circle />
                        <h4>Jacob Dolph</h4>

                    </div>


                </Col>
                <Col size='s12'>
                    <WebDev />
                </Col>
            </Row>


        </Container >
    );
};

export default Home;