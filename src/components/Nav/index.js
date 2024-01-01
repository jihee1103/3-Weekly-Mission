import logo from "../../assets/logo.svg";

const Nav = ({ user }) => {
  return (
    <>
      <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
      {user ? (
        <div>
          <img src={user.profileImageSource} alt={user.name} />
          <div>{user.email}</div>
        </div>
      ) : (
        <button>로그인</button>
      )}
    </>
  );
};

export default Nav;
