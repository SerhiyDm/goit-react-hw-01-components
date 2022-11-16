import styled from "styled-components";

export const Item = styled.li`
  display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: auto;
      padding: 30% 0;
      border: 1px #c4cace solid;
      background-color: ${props => props.bgcl? props.bgcl :
      '#d5e5d5'};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
      height: 20%;
`;

