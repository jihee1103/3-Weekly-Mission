import "./UserProfile.css";

function UserProfile({ userEmail, userProfileImg }) {
  return (
    <div className="user-profile">
      <img src={userProfileImg} alt="profile-Img" />
      <span className="user-email">{userEmail}</span>
    </div>
  );
}

export default UserProfile;
