import React from 'react';

import Container from './styles';

const Issues = ({ repositorySelected }) => (
  <Container>
    <h1>Issues</h1>
    <p>{repositorySelected.name}</p>
  </Container>
);

export default Issues;
