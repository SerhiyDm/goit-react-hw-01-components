import styled from "styled-components";

export const FriendListStyled = styled.ul`
display: flex;
flex-direction: column;
row-gap: 15px;
`;

export const FriendListItem = styled.li`
display: flex;
align-items: center;
justify-content: start;
column-gap: 20px;
padding: 10px 20px;
border-radius: 4px;
box-shadow: 0px 3px 13px 0px #000000bf;
background-color: #fff;
`;

export const BooleanMarker = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.isOnline?
props.theme.colors.green :
props.theme.colors.red};
`;

export const FriendListImageStyled = styled.img`
  display: block;
    width: ${props => props.width};
    height: auto;
    border-radius: '4px';
`;

export const FriendListText = styled.p`
font-size: 24px;
font-weight: bold;
color: ${props => props.theme.colors.primaryText};
`;
