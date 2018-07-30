import React from 'react';
import PropTypes from 'prop-types';

import Container from './style';

const Form = ({
  loading,
  repositoryInput,
  repositoryError,
  handleChangeInput,
  handleAddRepository,
}) => (
  <Container withError={repositoryError} onSubmit={handleAddRepository}>
    <input
      type="text"
      placeholder="Novo repositório"
      value={repositoryInput}
      onChange={handleChangeInput}
    />
    <button type="submit">
      <i className={loading ? 'fa fa-spinner fa-pulse' : 'fa fa-plus-circle'} />
    </button>
  </Container>
);

Form.propTypes = {
  loading: PropTypes.bool.isRequired,
  repositoryInput: PropTypes.string.isRequired,
  repositoryError: PropTypes.bool.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleAddRepository: PropTypes.func.isRequired,
};

export default Form;
