import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Form from '../Form';
import RepositoriesList from '../RepositoriesList';

import Aside from './style';

class Sidebar extends Component {
  static propTypes = {
    handleSelectRepository: PropTypes.func.isRequired,
  };

  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleChangeInput = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...this.state.repositories, response.data],
      });
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, repositoryInput, repositoryError, repositories } = this.state;
    const { handleSelectRepository } = this.props;
    return (
      <Aside>
        <Form
          loading={loading}
          repositoryInput={repositoryInput}
          repositoryError={repositoryError}
          handleChangeInput={this.handleChangeInput}
          handleAddRepository={this.handleAddRepository}
        />
        <RepositoriesList
          repositories={repositories}
          handleSelectRepository={handleSelectRepository}
        />
      </Aside>
    );
  }
}

export default Sidebar;
