import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  height: 100px;
  justify-content: flex-end;
  padding: 30px;
`;

export const Select = styled.div`
  border-radius: 3px;
  border: 1px solid #ddd;
  font-size: 16px;
  height: 42px;
  position: relative;

  &:after {
    content: '\f107';
    font-family: FontAwesome;
    position: absolute;
    pointer-events: none;
    top: 12px;
    right: 20px;
  }

  select {
    appearance: none;
    background: transparent;
    border: none;
    color: #666;
    font-size: 14px;
    height: 40px;
    padding: 5px 15px;
    width: 215px;
  }
`;

export const Issues = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Alert = styled.div`
  text-align: center;
  padding: 50px;
  flex: 1;
`;
