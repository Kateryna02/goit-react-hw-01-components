

import React from 'react';

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;

    return (
        <li className="item">
            <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

export default FriendListItem;