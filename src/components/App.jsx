import React from 'react';
import '../index.css';

import Profile from './01-profile/user.jsx';
import userData from './01-profile/user.json';

import Statistics from './02-stats/stats.jsx';
import statsData from './02-stats/data.json';

import FriendList from './03-friendList/friendList.jsx';
import friendListData from './03-friendList/friends.json';

import TransactionHistory from './04-transactions/transactions.jsx';
import transactionsData from './04-transactions/transactions.json';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendListData} />;
      <TransactionHistory items={transactionsData} />;
    </div>
  );
};

export default App;
