import styled from 'styled-components';

const Avatar = styled.div`
  border: 0;
  display: flex;
  width: 100%;

  img {
    border-radius: 3px;
    height: 45px;
    width: 45px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 0 10px;

    p {
      color: #333;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    small {
      color: #999;
      font-size: 12px;
    }
  }
`;

export default Avatar;
