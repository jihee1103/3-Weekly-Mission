import "../css/NavProfile.css";
export default function NavProfile({ userEmail, userProfileImg }) {
  return (
    <div className="header-profile">
      <img
        src={userProfileImg}
        alt="profile"
        className="header-profile-img"
      />
      <span className="header-profile-email">{userEmail}</span>
    </div>
  );
}
