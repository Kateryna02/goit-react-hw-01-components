
import React from "react";
import Profile from "./profile/Profile";
import userData from "./profile/User.json";
import Statistics from "./statistics/Statistics";
import Data from "./statistics/Data.json";
import FriendList from "./friendList/FriendList";
import friendsData from "./friendList/FriendData.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactions from "./transactionHistory/Transactions.json";
import "../index.css";

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div>
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={Data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;