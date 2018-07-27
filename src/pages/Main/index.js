import React from 'react';

import Sidebar from '../../components/Sidebar';
import Issues from '../../components/Issues';

import Container from './style';

const Main = () => (
  <Container>
    <Sidebar />
    <Issues />
  </Container>
);

export default Main;
