import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSidNav from '../Pages/Shared/RightSidNav/RightSidNav';

const Main = () => {
    return (
      <div style={{backgroundColor:"rgb(226 232 240)"}}>
        <Header></Header>
          <Container>
            <Row>
            <Col lg='3'>
                    <RightSidNav></RightSidNav>
                </Col>
           
                <Col lg='7'>
                    <Outlet></Outlet>
                </Col>
                  <Col lg='2' className='d-none d-lg-block'>
                   <LeftSideNav></LeftSideNav>
                </Col> 
                
            </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;