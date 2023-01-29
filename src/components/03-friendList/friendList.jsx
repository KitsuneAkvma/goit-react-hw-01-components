const FriendList = friendListProps => {
  return (
    <ul>
      {friendListProps.friends.map(friend => (
        <li className="item" key={friend.id}>
          <span
            className="status"
            is-online={friend.isOnline.toString()}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
