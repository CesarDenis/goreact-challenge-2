import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import IssuesList from '../../components/IssuesList';

import Container from './style';

class Main extends Component {
  state = {
    repositorySelected: null,
  };

  handleSelectRepository = ({ repository, e }) => {
    e.preventDefault();

    this.setState({ repositorySelected: repository });
  };

  render() {
    const { repositorySelected } = this.state;
    return (
      <Container>
        <Sidebar handleSelectRepository={this.handleSelectRepository} />
        <IssuesList repositorySelected={repositorySelected} />
      </Container>
    );
  }
}

export default Main;
