import friendsCSS from './friends.module.css';

const FriendList = friendListProps => {
  return (
    <ul className={friendsCSS.friendList}>
      {friendListProps.friends.map(friend => (
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
export default FriendList;
