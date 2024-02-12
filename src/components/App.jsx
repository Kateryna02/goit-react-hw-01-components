// import React from "react";
// import Profile from "./profile/Profile";
// import userData from "./profile/User.json";
// import Statistics from "./statistics/Statistics";
// import Data from "./statistics/Data.json";
// import FriendList from "./friendList/FriendList";
// import FriendData from "./friendList/FriendList.json";


// const App = () => {
//   const { username, tag, location, avatar, stats } = userData;
//   const { title } = Data;


//   return (
//     <div>
//       <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
//       <Statistics title="Upload stats" stats={Data} />
//       <FriendList friends={FriendData} />
//     </div>
//   );
// };
// export default App

import React from "react";
import Profile from "./profile/Profile";
import userData from "./profile/User.json";
import Statistics from "./statistics/Statistics";
import Data from "./statistics/Data.json";
import FriendList from "./friendList/FriendList";
import FriendListItem from "./friendList/FriendListItem";
import friendsData from "./friendList/FriendList.json";


const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  const { title } = Data;
 
  return (
    <div>
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={Data} />
      <FriendList friends={friendsData} />;
    </div>
  );
};
export default App;