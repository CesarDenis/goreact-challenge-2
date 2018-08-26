import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;

  li {
    display: block;
    padding: 10px 0;

    button {
      align-items: center;
      background: none;
      border: 0;
      display: flex;
      flex-direction: row;
      padding: 5px 0;
      width: 100%;
      text-align: left;

      i {
        color: #999;
        font-size: 16px;
      }
    }
  }
`;

export default Container;
