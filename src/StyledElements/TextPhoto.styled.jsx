import styled from "styled-components";


export const StyledImage = styled.img`
  display: block;
    width: ${props => props.width? `${props.width}px` :
    '50%'};
    height: auto;
    border-radius: ${props => props.br};
`;

export const TitleText = styled.h2`
text-align: center;
text-transform: uppercase;
font-size: ${props => props.fontSize};
font-weight: ${props => props.fontWeight};
color: ${props => props.fontColor};
`;


export const Text = styled.p`
font-size: ${props => props.fontSize?
    props.fontSize : '16px' };
font-weight: ${props => props.fontWeight?
props.fontWeight : 'normal'};
color: ${props => props.fontColor?
props.fontColor :
props.theme.colors.secondaryText};
`;
