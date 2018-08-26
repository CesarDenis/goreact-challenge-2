import React from 'react';

import Avatar from './styles';

const RepositoryAvatar = ({ repository }) => (
  <Avatar>
    <img src={repository.owner.avatar_url} alt="{repository.owner.login}" />
    <div>
      <p>{repository.name}</p>
      <small>{repository.owner.login}</small>
    </div>
  </Avatar>
);

export default RepositoryAvatar;
