export default function NavProfile({ userEmail, userProfileImg }) {
  return (
    <div className="header-profile">
      <img
        src={userProfileImg}
        alt="profile"
        className="header-profile-img"
      />
      <span>{userEmail}</span>
    </div>
  );
}
