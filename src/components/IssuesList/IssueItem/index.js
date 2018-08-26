import React from 'react';

import { Card } from './styles';

const IssueItem = ({ issue }) => (
  <Card>
    <img src={issue.user.avatar_url} alt={issue.user.login} />
    <div>
      <p>{issue.title}</p>
      <small>{issue.user.login}</small>
      <a href={issue.html_url} target="blank">
        <i className="fa fa-external-link" /> Abrir Issue
      </a>
    </div>
  </Card>
);

export default IssueItem;
