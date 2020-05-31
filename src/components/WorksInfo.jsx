import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import Image from 'react-bootstrap/Image' 

import works from '../WorkDataList'

const WorksInfo = () => {
  const WorkCards = works.map((item, key) => 
    <div
      key = {item.name}
    >
        <Card 
          style = {{ width: '16rem' }}
          border = 'primary'
          className='mx-2 my-2'
        >
          <Card.Body>
            <Card.Title>
              {item.name}
            </Card.Title>    
            <Image src=
              "https://dummyimage.com/300x200/000111/fff&text=dummy+image" fluid />
          </Card.Body>
        </Card>
    </div>
  );

  document.title = '業務内容'
  return (
    <React.Fragment>
      <CardGroup
        className='px-4 py-4 
          align-item-center justify-content-center'
      >
        {WorkCards}
      </CardGroup>
    </React.Fragment>
  );
}
export default WorksInfo;
