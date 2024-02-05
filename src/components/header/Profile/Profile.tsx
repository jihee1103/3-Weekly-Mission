import './Profile.css';
import { User } from '../Nav/Nav';

interface Props {
  user: User;
}

function Profile({ user }: Props) {
  return (
    <div className="user">
      <img
        className="profile"
        src={user.profileImageSource || user['image_source']}
        alt="프로필 사진"
      />
      <span className="email">{user.email}</span>
    </div>
  );
}

export default Profile;
