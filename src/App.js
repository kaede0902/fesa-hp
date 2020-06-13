import React ,{ Suspense }from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/body.css';

function App() {

let loading = () => <div>Loading...</div>

  return (
    <Container className=''>
      <Header />
      <Row className='leftside'>
        <Col className='' 
          xs={0} md={2}>
          <SideMenu />
        </Col>
        <Col className='bodyText' 
          xs={12} md={10} >
            <Router>
            <Suspense fallback={loading}>
            <Switch>
             {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => 
                    (<route.component {...props} />)}
                />
              ))
             }
             <Route render={() => <h1>not found!.</h1>} />
            </Switch>
            </Suspense>
            </Router>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
export default App;
