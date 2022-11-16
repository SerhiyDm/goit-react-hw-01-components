import styled from "styled-components";
 
export const TableStyled = styled.table`
width: 100%;
padding: 20px;
`;

export const TdStyled = styled.td`
text-align: center;
border:${props => props.thead? 'none' :
' 1px #8c8e90 solid'};
font-size: ${props => props.thead ?
    props.theme.fontSizes.general :
props.theme.fontSizes.secondary};
font-weight: ${props => props.thead?
'bolder' :
'normal'};
color: ${props => props.thead?
    props.theme.colors.primaryText :
     props.theme.colors.secondaryText};

`;