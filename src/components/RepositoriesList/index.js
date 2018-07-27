import React from 'react';

import Container from './styles';

const Repositories = () => (
  <Container>
    <li>
      <button>
        <img src="https://avatars2.githubusercontent.com/u/29647600?v=4" alt="React Navigation" />
        <div>
          <p>react-navigation</p>
          <small>React Navigation</small>
        </div>
        <i className="fa fa-angle-right" />
      </button>
    </li>
    <li>
      <button>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Facebook" />
        <div>
          <p>react</p>
          <small>Facebook</small>
        </div>
        <i className="fa fa-angle-right" />
      </button>
    </li>
    <li>
      <button>
        <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="vuejs" />
        <div>
          <p>vue</p>
          <small>vuejs</small>
        </div>
        <i className="fa fa-angle-right" />
      </button>
    </li>
    <li>
      <button>
        <img src="https://avatars1.githubusercontent.com/u/14294095?v=4" alt="Cesar Denis" />
        <div>
          <p>numerology-calculator</p>
          <small>Cesar Denis</small>
        </div>
        <i className="fa fa-angle-right" />
      </button>
    </li>
  </Container>
);

export default Repositories;
