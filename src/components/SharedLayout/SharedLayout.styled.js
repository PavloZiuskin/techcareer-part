import { NavLink } from 'react-router-dom';
import styled from "styled-components";
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    margin: 0 auto;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 0 40px;
  &.active {
    color: white;
    background-color: #5CD3A8;
  }
  :hover,
  :focus {
    color: #000000;
    background-color: #5CD3A8;
  }
`;