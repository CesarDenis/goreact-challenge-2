import React from 'react';
import PropTypes from 'prop-types';

import RepositoryAvatar from '../RepositoryAvatar';

import Container from './styles';

const RepositoriesList = ({ repositories, handleSelectRepository }) => (
  <Container>
    {repositories.map(repository => (
      <li key={repository.id}>
        <button onClick={e => handleSelectRepository({ repository, e })}>
          <RepositoryAvatar repository={repository} />
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
