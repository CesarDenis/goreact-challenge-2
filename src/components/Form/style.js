import styled from 'styled-components';

const Container = styled.form`
  border-bottom: 1px solid #eee;
  display: flex;
  padding-bottom: 20px;
  width: 100%;

  input {
    background: #eee;
    border-radius: 3px;
    border: 0;
    color: #999;
    flex: 1;
    font-size: 14px;
    height: 48px;
    padding: 0 20px;
  }

  button {
    background: #59ea9a;
    border-radius: 3px;
    border: 0;
    color: #fff;
    font-size: 16px;
    height: 48px;
    margin-left: 10px;
    padding: 0 20px;
    width: 50;
  }
`;

export default Container;
