import React from 'react';

import Container from './style';

const Form = () => (
  <Container>
    <input type="text" placeholder="Novo repositório" />
    <button>
      <i className="fa fa-plus-circle" />
    </button>
  </Container>
);

export default Form;
