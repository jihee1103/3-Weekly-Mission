import "./nav-style.css";
import logo from "./logo.png";
// import { LoginButton } from "../login-button/login-button.jsx";

export function NavBar({ user }) {
  const userData = user;
  // if (!user) {
  return (
    <>
      <div className="nav-section">
        <div className="nav-first-section">
          <img src={logo}></img>
        </div>

        <div className="nav-second-section">
          <div className="nav-profile">
            <img src={user.profileImageSource}></img>
          </div>
          <h3 className="nav-profile-info">{user.email}</h3>
        </div>
      </div>
    </>
  );
  //   } else {
  //     return (
  //       <>
  //         <div className="nav-section">
  //           <div className="nav-first-section">
  //             <img src={logo}></img>
  //           </div>

  //           <LoginButton />
  //         </div>
  //       </>
  //     );
  //   }
}
