import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/body.css';

function Home(props) {

  return (
    <Container className='my-5 '>
      <Header />
      <Row className='leftside'>
        <Col className='' 
          xs={0} md={2}>
          <SideMenu />
        </Col>
        <Col className='bodyText' 
          xs={12} md={10} >
          {props.body}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
export default Home;
