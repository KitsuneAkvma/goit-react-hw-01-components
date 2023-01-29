import userCSS from './user.module.css';
import { usersIcon, eyeIcon, likeIcon } from 'components/svgs';
const Profile = profileProps => {
  return (
    <div className={userCSS.profile}>
      <div className={userCSS.description}>
        <img
          src={profileProps.avatar}
          alt="User avatar"
          className={userCSS.avatar}
        />
        <p className={userCSS.name}>{profileProps.username}</p>
        <p className={userCSS.tag}>@{profileProps.tag}</p>
        <p className={userCSS.location}>{profileProps.location}</p>
      </div>

      <ul className={userCSS.stats}>
        <li className={userCSS.statsItem}>
          <span className={userCSS.label}>Followers</span>
          <span className={userCSS.quantity}>
            {profileProps.stats.followers}
          </span>
        </li>
        {usersIcon}

        <li className={userCSS.statsItem}>
          {eyeIcon}
          <span className={userCSS.label}>Views</span>
          <span className={userCSS.quantity}>{profileProps.stats.views}</span>
        </li>
        <li className={userCSS.statsItem}>
          {likeIcon}
          <span className={userCSS.label}>Likes</span>
          <span className={userCSS.quantity}>{profileProps.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
