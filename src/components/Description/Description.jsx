import { Box } from "components/Box/Box";
import { theme } from "constants";
import { StyledImage, Text } from "../../StyledElements/TextPhoto.styled";
import PropTypes from 'prop-types';


export const Description = ({username,
    tag,
    location,
    avatar,
}) => {
    return <Box
    width="100%"
    py="50px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    ><StyledImage src={avatar}
    alt='User avatar'
    br={'50%'}/><Text fontSize={theme.fontSizes.general}
    fontColor={theme.colors.primaryText}
    fontWeight={theme.fontWeights.b}>{username}</Text>
    <Text fontSize={theme.fontSizes.gns}
    fontWeight={theme.fontWeights.bb}>{tag}</Text>
    <Text>{location}</Text></Box>
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
}
