import React from 'react';
import Header from '../pages/Sheared/Header/Header';
import Footer from '../pages/Sheared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../shearNav/LeftNav';
import RightNav from '../shearNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                       <h1>Main container</h1>
                        </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;