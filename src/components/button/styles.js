import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 80px;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px gray;
  :hover {
    filter: brightness(70%);
  }
`;
