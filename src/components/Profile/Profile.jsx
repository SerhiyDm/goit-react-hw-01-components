import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Container } from 'components/Box/Container';
import {
  ProfileStyledPImage,
  ProfileText,
  ProfileList,
  ProfileItem,
} from './Profile.styled';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <Box
      width="100%"
      py="50px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <ProfileStyledPImage src={avatar} alt="User avatar" />
      <ProfileText fontSize="#010101" fontWeight="bold" fontColor="#010101">
        {username}
      </ProfileText>
      <ProfileText>{tag}</ProfileText>
      <ProfileText>{location}</ProfileText>
    </Box>
  );
};

const Stats = ({ stats }) => {
  return (
    <ProfileList>
      <ProfileItem>
        <ProfileText>Followers</ProfileText>
        <ProfileText>{stats.followers}</ProfileText>
      </ProfileItem>
      <ProfileItem>
        <ProfileText>Views</ProfileText>
        <ProfileText>{stats.views}</ProfileText>
      </ProfileItem>
      <ProfileItem>
        <ProfileText>Likes</ProfileText>
        <ProfileText>{stats.likes}</ProfileText>
      </ProfileItem>
    </ProfileList>
  );
};

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </Container>
  );
};

Profile.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};
