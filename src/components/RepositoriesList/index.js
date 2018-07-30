import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const RepositoriesList = ({ repositories, handleSelectRepository }) => (
  <Container>
    {repositories.map(repository => (
      <li key={repository.id}>
        <button onClick={e => handleSelectRepository({ repository, e })}>
          <img src={repository.owner.avatar_url} alt="{repository.owner.login}" />
          <div>
            <p>{repository.name}</p>
            <small>{repository.owner.login}</small>
          </div>
          <i className="fa fa-angle-right" />
        </button>
      </li>
    ))}
  </Container>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default RepositoriesList;
