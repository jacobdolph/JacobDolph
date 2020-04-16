import React from "react";
import { Col, Row, Container } from '../components/Grid'

import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Mapout from "../components/Mapout";
import Tech from "../components/Tech";


const Home = () => {
    return (
        <Container  >
            <Navbar />
            <Navmobile />
            <Row>
                <Container container>
                    <Header />
                </Container>


                <Col size='s12'>
                    <WebDev />
                </Col>
            </Row>
            <Row>
                <Portfolio />
                <Mapout />
            </Row>
            <Row>
                <Tech />
            </Row>

        </Container >
    );
};

export default Home;