import profileicon from "../../../assets/profileicon.svg";
import "./UserProfile.css";

function UserProfile({ userEmail }) {
  return (
    <div className="header-user">
      <i className="profile-icon">
        <img src={profileicon} alt="프로필 이미지" />
      </i>
      {userEmail}
    </div>
  );
}

export default UserProfile;
