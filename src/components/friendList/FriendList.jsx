
import s from "./FriendList.module.css";

import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendList;
