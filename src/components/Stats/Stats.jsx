import { List, Item } from "../../StyledElements/List.styled";
import PropTypes from 'prop-types';
import {theme} from "constants";
import { Text } from "StyledElements/TextPhoto.styled";
export const Stats = ({stats}) => {
    return (<List>
    <Item key={'1'}>
    <Text fontSize={theme.fontSizes.secondary}>Followers</Text>
    <Text fontSize={theme.fontSizes.secondary}
     fontWeight={theme.fontWeights.bb}>{stats.followers}</Text>
    </Item>
    <Item key={'2'}>
      <Text fontSize={theme.fontSizes.secondary}>Views</Text>
      <Text fontSize={theme.fontSizes.secondary}
       fontWeight={theme.fontWeights.bb}>{stats.views}</Text>
    </Item>
    <Item key={'3'}>
  <Text fontSize={theme.fontSizes.secondary}>Likes</Text>
  <Text fontSize={theme.fontSizes.secondary}
   fontWeight={theme.fontWeights.bb}>{stats.likes}</Text>
    </Item>
    </List>)
  }

  Stats.propTypes = {
    stats: PropTypes.objectOf(PropTypes.number),
  }