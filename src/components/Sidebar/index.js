import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';
import RepositoriesList from '../RepositoriesList';

import Aside from './style';

const Sidebar = ({
  loading,
  repositoryInput,
  repositoryError,
  repositories,
  handleChangeInput,
  handleAddRepository,
  handleSelectRepository,
}) => (
  <Aside>
    <Form
      loading={loading}
      repositoryInput={repositoryInput}
      repositoryError={repositoryError}
      handleChangeInput={handleChangeInput}
      handleAddRepository={handleAddRepository}
    />
    <RepositoriesList repositories={repositories} handleSelectRepository={handleSelectRepository} />
  </Aside>
);

Sidebar.propTypes = {
  loading: PropTypes.bool.isRequired,
  repositoryInput: PropTypes.string.isRequired,
  repositoryError: PropTypes.bool.isRequired,
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
  handleChangeInput: PropTypes.func.isRequired,
  handleAddRepository: PropTypes.func.isRequired,
  handleSelectRepository: PropTypes.func.isRequired,
};

export default Sidebar;
