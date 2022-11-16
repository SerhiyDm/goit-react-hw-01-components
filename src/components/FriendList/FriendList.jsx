import PropTypes from 'prop-types';
import {
  FriendListStyled,
  FriendListItem,
  BooleanMarker,
  FriendListImageStyled,
  FriendListText,
} from './FriendList.styled';
import { Container } from 'components/Box/Container';
export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendListStyled>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id}>
            <BooleanMarker isOnline={isOnline}></BooleanMarker>
            <FriendListImageStyled
              src={avatar}
              alt="User avatar"
              width={'48'}
              br={'4px'}
            />
            <FriendListText>{name}</FriendListText>
          </FriendListItem>
        ))}
      </FriendListStyled>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
