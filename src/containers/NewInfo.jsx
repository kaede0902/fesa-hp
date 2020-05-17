import React from 'react';
import Home from './Home';
import WorksInfo from '../components/WorksInfo'

function NewInfo() {

  return (
    <Home body={<WorksInfo />}/>
  );
}
export default NewInfo;
