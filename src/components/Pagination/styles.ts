import styled from 'styled-components';

export const Container = styled.div``;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const PaginationList = styled.div`
display: flex;
`;
export const PaginationItem = styled.div`
  margin: 0 10px;
  button{
    font-size: 12px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: gray;
  &:hover {
    background-color: #67b3ff;
    transition: 0.4s;
    color: #fff;
  }
  }
`;
