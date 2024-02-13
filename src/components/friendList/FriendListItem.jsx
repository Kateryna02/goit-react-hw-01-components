

import React from 'react';
import s from "./FriendList.module.css";
const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    const statusName = isOnline ? s.online : s.offline;
    return (
        <li className={s.item}>
            <span className={`status ${statusName}`}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;