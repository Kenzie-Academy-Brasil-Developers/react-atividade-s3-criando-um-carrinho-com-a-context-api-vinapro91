import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
`;

export const List = styled.ul`
  display: flex;
  margin: 15px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  padding: 5px;

  li {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 5px;
    list-style: none;
    border: 1px solid black;
    width: 150px;
    height: 150px;
    justify-content: center;
  }
`;
