import PropTypes from 'prop-types';

import friendsCSS from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={friendsCSS.friendList}>
      {friends.map(friend => (
        <li className={friendsCSS.friend} key={friend.id}>
          <span
            className={friendsCSS.status}
            is-online={friend.isOnline.toString()}
            style={
              friend.isOnline
                ? { backgroundColor: '#22f938' }
                : { backgroundColor: '#f33535' }
            }
          ></span>
          <img
            className={friendsCSS.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={friendsCSS.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired, // in case of one friend
};

export default FriendList;
