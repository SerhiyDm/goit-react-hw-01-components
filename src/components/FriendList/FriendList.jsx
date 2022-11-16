import styled from "styled-components";
import PropTypes from 'prop-types';

import { Container } from "StyledElements/Container";
import { StyledImage, Text } from "StyledElements/TextPhoto.styled";
import { theme } from "constants";

const List2 = styled.ul`
display: flex;
flex-direction: column;
row-gap: 15px;
`;
const FriendListItem = styled.li`
display: flex;
align-items: center;
justify-content: start;
column-gap: 20px;
padding: 10px 20px;
border-radius: 4px;
box-shadow: 0px 3px 13px 0px #000000bf;
background-color: #fff;
`;

const BooleanMarker = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.isOnline?
props.theme.colors.green :
props.theme.colors.red};
`;

export const FriendList = ({friends}) => {
    return (
        <Container>
        <List2>
        {friends.map(({avatar,
            name,
            isOnline,
            id})=> (<FriendListItem key={id}>
            <BooleanMarker isOnline={isOnline}></BooleanMarker>
            <StyledImage src={avatar}
            alt="User avatar"
            width={'48'}
            br={'4px'} /><Text fontSize={theme.fontSizes.gns}
            fontWeight={theme.fontWeights.b}
            fontColor={theme.colors.primaryText}>{name}</Text></FriendListItem>))}
        </List2>
    </Container> )
        }

        FriendList.propTypes = {
            friends: PropTypes.arrayOf(
                PropTypes.exact({
                    avatar: PropTypes.string,
                    name: PropTypes.string.isRequired,
                    isOnline: PropTypes.bool.isRequired,
                    id: PropTypes.number,
                })
            )
        }



