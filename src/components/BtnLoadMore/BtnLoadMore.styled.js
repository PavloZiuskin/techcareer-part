import styled from "styled-components";
export const Btn = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: blue;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #5CD3A8;
  }
`;