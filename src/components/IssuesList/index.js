import React, { Component } from 'react';
import api from '../../services/api';

import RepositoryAvatar from '../RepositoryAvatar';
import IssueItem from './IssueItem';

import { Container, Header, Select, Issues, Alert } from './styles';

class IssuesList extends Component {
  state = {
    activeFilter: 'all',
    loading: false,
    issues: [],
  };

  filters = [
    { value: 'all', label: 'Todas' },
    { value: 'open', label: 'Abertas' },
    { value: 'closed', label: 'Fechadas' },
  ];

  componentDidUpdate(prevProps) {
    const { repositorySelected } = this.props;

    if (prevProps.repositorySelected !== null) {
      if (prevProps.repositorySelected.id !== repositorySelected.id) {
        this.loadIssues();
      }
    } else {
      this.loadIssues();
    }
  }

  loadIssues = async () => {
    this.setState({ loading: true });

    const { repositorySelected } = this.props;
    const { activeFilter } = this.state;

    const response = await api.get(`repos/${repositorySelected.full_name}/issues`, {
      params: { state: activeFilter },
    });

    this.setState({ issues: response.data, loading: false });
  };

  render() {
    const { activeFilter, loading } = this.state;
    const { repositorySelected } = this.props;
    return (
      <Container>
        <Header>
          {repositorySelected && <RepositoryAvatar repository={repositorySelected} />}

          <Select>
            <select
              value={activeFilter}
              disabled={repositorySelected ? false : true}
              onChange={e => this.setState({ activeFilter: e.target.value }, this.loadIssues)}
            >
              {this.filters.map(filter => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </Select>
        </Header>

        <Issues>
          {!repositorySelected && <Alert>Nenhum repositorio selecionado...</Alert>}
          {loading && <Alert>Carregando...</Alert>}
          {this.state.issues.map(issue => <IssueItem key={issue.id} issue={issue} />)}
        </Issues>
      </Container>
    );
  }
}

export default IssuesList;
