import React from "react";
import { Col, Row, Container, Img } from '../components/Grid'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";


const Home = () => {
    return (
        <Container  >
            <Navbar />
            <Navmobile />
            <Row>
                <Col size='s12'>
                    <Header />
                </Col>
                <Col size='s12'>
                    <WebDev />
                </Col>
            </Row>
            <Row>
                <Portfolio />
            </Row>

        </Container >
    );
};

export default Home;