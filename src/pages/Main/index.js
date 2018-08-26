import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import IssuesList from '../../components/IssuesList';

import Container from './style';

class Main extends Component {
  state = {
    repositorySelected: {},
  };

  handleSelectRepository = ({ repository, e }) => {
    e.preventDefault();

    this.setState({ repositorySelected: repository });
  };

  render() {
    return (
      <Container>
        <Sidebar handleSelectRepository={this.handleSelectRepository} />
        <IssuesList repositorySelected={this.state.repositorySelected} />
      </Container>
    );
  }
}

export default Main;
