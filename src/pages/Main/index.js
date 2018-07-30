import React, { Component } from 'react';
import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import Issues from '../../components/Issues';

import Container from './style';

class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositorySelected: {},
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

  handleSelectRepository = ({ repository, e }) => {
    e.preventDefault();

    this.setState({ repositorySelected: repository });
  };

  render() {
    return (
      <Container>
        <Sidebar
          loading={this.state.loading}
          repositoryInput={this.state.repositoryInput}
          repositoryError={this.state.repositoryError}
          repositories={this.state.repositories}
          handleChangeInput={this.handleChangeInput}
          handleAddRepository={this.handleAddRepository}
          handleSelectRepository={this.handleSelectRepository}
        />
        <Issues repositorySelected={this.state.repositorySelected} />
      </Container>
    );
  }
}

export default Main;
