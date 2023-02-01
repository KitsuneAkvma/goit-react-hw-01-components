import PropTypes from 'prop-types';

import userCSS from './user.module.css';
import { usersIcon, eyeIcon, likeIcon } from 'components/svgs';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={userCSS.profile}>
      <div className={userCSS.description}>
        <img src={avatar} alt="User avatar" className={userCSS.avatar} />
        <p className={userCSS.name}>{username}</p>
        <p className={userCSS.tag}>@{tag}</p>
        <p className={userCSS.location}>{location}</p>
      </div>

      <ul className={userCSS.stats}>
        <li className={userCSS.statsItem}>
          <span className={userCSS.label}>Followers</span>
          <span className={userCSS.quantity}>{stats.followers}</span>
        </li>
        {usersIcon}

        <li className={userCSS.statsItem}>
          {eyeIcon}
          <span className={userCSS.label}>Views</span>
          <span className={userCSS.quantity}>{stats.views}</span>
        </li>
        <li className={userCSS.statsItem}>
          {likeIcon}
          <span className={userCSS.label}>Likes</span>
          <span className={userCSS.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
