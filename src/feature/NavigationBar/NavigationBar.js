import { Profile } from "../../ui/Profile/Profile";
import { ROUTE } from "../../util/constant";
import { LOGO_IMAGE, TEXT } from "./constant";
import { Cta } from "../../ui/Cta/Cta";
import "./NavigationBar.css";

export const NavigationBar = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img className="NavigationBar-logo" src={LOGO_IMAGE} alt="상단 메인 로고" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className="NavigationBar-signin">{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};

//Cta 부분 isSmall 이라는 변수 이유를 모르겠어서 일단 빼놓음
