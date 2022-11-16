 import styled from "styled-components";
 import PropTypes from 'prop-types';
import { Container } from "StyledElements/Container";
import { theme } from "constants";

const Table = styled.table`
width: 100%;
padding: 20px;
`;

const Td = styled.td`
text-align: center;
border:${props => props.b? props.b :
' 1px #8c8e90 solid'};
font-size: ${props => props.fontSize ?
props.fontSize :
props.theme.fontSizes.secondary};
font-weight: ${props => props.fontWeight ?
props.fontWeight :
'normal'};
color: ${props => props.fontColor ?
    props.fontColor :
     props.theme.colors.secondaryText};

`;

 export const TransactionHistory = ({items}) => {
    return ( <Container>
        <Table>
    <thead>
      <tr>
        <Td fontSize={theme.fontSizes.gns}
        fontWeight={theme.fontWeights.bb}
        fontColor={theme.colors.primaryText}
        b={'none'}>Type</Td>
        <Td fontSize={theme.fontSizes.gns}
        fontWeight={theme.fontWeights.bb}
        fontColor={theme.colors.primaryText}
        b={'none'}>Amount</Td>
        <Td fontSize={theme.fontSizes.gns}
        fontWeight={theme.fontWeights.bb}
        fontColor={theme.colors.primaryText}
        b={'none'}>Currency</Td>
      </tr>
    </thead>
  <tbody>
  {items.map(({id,
  type,
  amount,
  currency}) => (
 <tr key={id}>
    <Td>{type}</Td>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
 </tr>   
  ))}
    </tbody>
  </Table>
    </Container>)
 }

 TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string,
        currency: PropTypes.string.isRequired
    }))
 }