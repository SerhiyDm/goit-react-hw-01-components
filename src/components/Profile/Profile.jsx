import PropTypes from 'prop-types';
import {Description} from "components/Description/Description";
import { Stats } from "components/Stats/Stats";
import { Container } from "StyledElements/Container";


export const Profile = ({data}) => {
    return (
<Container>
<Description  username={data.username}
tag={data.tag}
location={data.location}
avatar={data.avatar} />
<Stats stats={data.stats} /></Container>
    )
}

Profile.propTypes = {
data: PropTypes.exact({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
})
  };