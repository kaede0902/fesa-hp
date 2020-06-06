import React from 'react';

const Home = React.lazy( () => 
  import('./components/Home')
);
const Works = React.lazy( () => 
  import('./containers/Works')
);
const Shops = React.lazy( () => 
  import('./containers/Shops')
);
const News = React.lazy( () => 
  import('./containers/News')
);


const Parts = React.lazy( () => 
  import('./containers/Parts')
);
const Airs = React.lazy( () => 
  import('./containers/Airs')
);
const Links = React.lazy( () => 
  import('./containers/Links')
);

const routes = [
  {path: '/', exact: true, name: 'Home', 
    component: Home},
  {path: '/works', exact: true, name: 'Works', 
    component: Works},
  {path: '/shoplist', exact: true, name: 'Shops', 
    component: Shops},
  {path: '/newinfo', exact: true, name: 'NewInfo', 
    component: News},

  {path: '/partsorder', exact: true, name: 'Parts', 
    component: Parts},
  {path: '/airconclean', exact: true, name: 'Airs', 
    component: Airs},
  {path: '/links', exact: true, name: 'Links', 
    component: Links},

]
export default routes;
