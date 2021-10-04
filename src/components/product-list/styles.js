import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  height: 50vh;
`;

export const List = styled.ul`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    margin: 5px;
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: 150px;
    justify-content: center;
  }
`;
