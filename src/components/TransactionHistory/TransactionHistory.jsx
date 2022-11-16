import PropTypes from 'prop-types';
import { Container } from 'components/Box/Container';
import { TableStyled, TdStyled } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <TableStyled>
        <thead>
          <tr>
            <TdStyled thead={true}>Type</TdStyled>
            <TdStyled thead={true}>Amount</TdStyled>
            <TdStyled thead={true}>Currency</TdStyled>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TdStyled>{type}</TdStyled>
              <TdStyled>{amount}</TdStyled>
              <TdStyled>{currency}</TdStyled>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
