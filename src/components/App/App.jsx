 import userData from '../../DataFiles/user.json';
 import statisticsData from '../../DataFiles/data.json';
 import friendsData from '../../DataFiles/friends.json';
import transactionsData from '../../DataFiles/transactions.json';
 import { Profile } from "components/Profile/Profile";
 import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'; 
 import { Box } from "components/Box/Box";
 import { Section } from 'components/Box/Section';


export const App = () => {
  return (<Box
  as='main'
  >
<Section><Profile username={userData.username}
  tag={userData.tag}
  location={userData.location}
  avatar={userData.avatar}
  stats={userData.stats}
/></Section>
<Section><Statistics title=''
stats={statisticsData}/></Section>
 <Section><FriendList friends={friendsData}/></Section>
<Section><TransactionHistory items={transactionsData}/></Section> 
     </Box>


)};

