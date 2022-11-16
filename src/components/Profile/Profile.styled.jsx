import styled from "styled-components";
import { Box } from "components/Box/Box";


export const ProfileStyledPImage = styled.img`
  display: block;
    width: 50%;
    height: auto;
    border-radius: 50%;
`;

export const ProfileText =styled.p`
font-size: ${props => props.fontSize?
    props.fontSize : props.theme.fontSizes.secondary };
font-weight: ${props => props.fontWeight?
props.fontWeight : 'normal'};
color: ${props => props.fontColor?
props.fontColor :
props.theme.colors.secondaryText};
`;
export const ProfileItem = styled.li`
  display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: auto;
      padding: 30% 0;
      border: 1px #c4cace solid;
      background-color: #d5e5d5;
`;

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
      height: 20%;
`;
