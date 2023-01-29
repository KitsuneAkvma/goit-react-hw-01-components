import userCSS from './user.module.css';

const Profile = profileProps => {
  return (
    <div className={userCSS.profile}>
      <div className={userCSS.description}>
        <img
          src={profileProps.avatar}
          alt="User avatar"
          className={userCSS.avatar}
        />
        <p className="name">{profileProps.username}</p>
        <p className="tag">@{profileProps.tag}</p>
        <p className="location">{profileProps.location}</p>
      </div>

      <ul className={userCSS.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{profileProps.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{profileProps.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{profileProps.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
