 import userData from '../../DataFiles/user.json';
 import statisticsData from '../../DataFiles/data.json';
 import friendsData from '../../DataFiles/friends.json';
 import transactionsData from '../../DataFiles/transactions.json';
 import { Profile } from "components/Profile/Profile";
 import { Statistics } from 'components/Statistics/Statistics';
 import { FriendList } from 'components/FriendList/FriendList';
 import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'; 
 import { Box } from "components/Box/Box";
 import { Section } from 'StyledElements/Section';


export const App = () => {
  return (<Box
  as='main'
  >
<Section><Profile data={userData}/></Section>
<Section><Statistics stats={statisticsData}/></Section>
<Section><FriendList friends={friendsData}/></Section>
<Section><TransactionHistory items={transactionsData}/></Section>
     </Box>


)};

