import React, {useContext} from 'react';
import profileImg from '../../assets/icons/icon-profile-img-default.png';
import {LoginContext} from "../../App";



function LoginButton() {

  const {userMail,isLogin,signIn} = useContext(LoginContext);

  return (
      <>
        {
          isLogin ? <a className="login-success">
            <img src={profileImg} alt="smileIcon"/>
                <p className="success">
                  {userMail}
                </p>
              </a>
              :
              <a>
                <p className="button" onClick={signIn}>
                  로그인
                </p>
              </a>
        }
      </>
  );
}

export default LoginButton;