import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './css/body.css';

function App() {

  return (
    <Container className='my-5 '>
      <Header />
      <Row className=''>
        <Col className='' 
          xs={3} md={2}>
          <SideMenu />
        </Col>
        <Col className='bodyText' 
          xs={9} md={10} >
          <Body />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
export default App;
