import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, ListGroup, ListGroupItem,} from 'react-bootstrap/';
import items from '../summer2020';

const NewInfo = () => {
  document.title = '六角橋店 夏の大感謝セール';
  const SalesCards = items.map((item, key) => 
    <Card 
      style = {{ width: '20rem' }}
      border = 'primary'
      className='my-2 mx-auto'
      key={item.title}
    >
      <Card.Body>
        <Card.Header
          className='my-2 text-center'>
          <h3>{item.title}</h3>
        </Card.Header>    
        <Card.Img variant="top" src={item.imgLink} />
      { item.descList.map((item, key) =>  
        <ListGroup className="list-group-flush">
          <ListGroupItem>
          {item}
          </ListGroupItem>
        </ListGroup>
        )
      }

      </Card.Body>
    </Card>
  );
  return (
    <div
      className ='px-2 py-4'
    >
      <h3 className='
        text-center 
      '>
        六角橋店，夏の大感謝セール！
      </h3>
      <h4 className='
        text-center 
      '>
        2020(令和2)年06月26日 ~ 07月05日
      </h4>
      <CardDeck  className='
        justify-content-center 
      '>
        {SalesCards}
      </CardDeck>
    </div>
  );
};
export default NewInfo;

