import React from 'react';
import AppCSS from './App.module.css';

import Profile from './profile/user.jsx';
import userData from './profile/user.json';

import Statistics from './stats/stats.jsx';
import statsData from './stats/data.json';

import FriendList from './friendList/friendList.jsx';
import friendListData from './friendList/friends.json';

import TransactionHistory from './transactions/transactions.jsx';
import transactionsData from './transactions/transactions.json';

export const App = () => {
  return (
    <div className={AppCSS}>
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
