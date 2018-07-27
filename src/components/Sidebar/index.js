import React from 'react';

import Form from '../Form';
import RepositoriesList from '../RepositoriesList';

import Aside from './style';

const Sidebar = () => (
  <Aside>
    <Form />
    <RepositoriesList />
  </Aside>
);

export default Sidebar;
