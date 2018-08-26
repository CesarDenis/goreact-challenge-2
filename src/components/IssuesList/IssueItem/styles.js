import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 3px;
  display: flex;
  margin: 10px;
  padding: 20px;
  width: calc(33.3333% - 20px);

  img {
    border-radius: 50%;
    height: 64px;
    margin-right: 20px;
    width: 64px;
  }

  p {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  small {
    color: #999;
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
  }

  a {
    background: #b286d1;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 15px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      background: #8a4ab7;
    }

    i {
      margin-right: 4px;
    }
  }
`;
