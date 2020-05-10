import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import Header from './components/Header';

function App() {

  return (
    <Container className='my-5'>
      <Header />
      <Row>
        <Col className='py-3 bg-primary' 
          xs={3} >
          <SideMenu />
        </Col>
        <Col className='py-3 bg-secondary' 
          xs={9} >
            <h4>
              Sit consequatur quisquam provident nemo ratione. Harum quam consequuntur minima aliquid deleniti Velit enim delectus molestiae ipsa quisquam a Ea eius officia culpa necessitatibus dolores Modi architecto expedita laboriosam debitis fuga Error reprehenderit ipsa doloribus quos fugit? Similique id praesentium quisquam voluptatibus amet Impedit quos quod nam rem exercitationem Sed dolorem illum esse odio dolore eligendi Autem aperiam beatae distinctio sint quos laudantium nisi corrupti! Totam eos quod beatae commodi rem Officiis obcaecati repellat labore molestiae adipisci Accusantium dicta ipsam corporis illum dolorem sit? Similique et exercitationem odio ea et labore Doloremque incidunt neque assumenda corporis ex nostrum error, quasi Temporibus necessitatibus corporis eaque cum impedit debitis cum! Nemo tenetur atque nisi id ducimus facere perspiciatis Doloribus iure tenetur tempore itaque error blanditiis laborum! Cum facere neque reiciendis consequuntur laboriosam possimus? Distinctio minima doloribus cupiditate dicta veritatis perspiciatis voluptatibus dolore? Libero vel tenetur mollitia ex inventore Sequi numquam a nesciunt recusandae iste nesciunt At molestiae fugiat odio iusto excepturi eum. Quos culpa quibusdam placeat facilis maxime vitae. Consequatur dolores quia vitae saepe minima earum Quas dignissimos eos porro delectus accusamus explicabo Rem impedit omnis eligendi expedita sit, eos? Magnam quod iure illum ratione dolor accusantium facilis. Distinctio ducimus hic eos
            </h4>
        </Col>
      </Row>
      <Row>
        <Col>1 </Col>
        <Col>2 </Col>
        <Col>3 </Col>
        <Col>4 </Col>
        <Col>5 </Col>
        <Col>6 </Col>
        <Col>7 </Col>
        <Col>8 </Col>
        <Col>9 </Col>
        <Col>10 </Col>
        <Col>11 </Col>
        <Col>12 </Col>
      </Row>
    </Container>
  );
}
export default App;
