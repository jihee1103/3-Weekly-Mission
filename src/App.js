import './styles/App.css';
import Favorites from "./pages/favorites/Favorites";
import React, {useEffect, useState} from "react";
import {logIn} from "./utils/api";
import BasicLayout from "./components/layout/BasicLayout";

export const LoginContext = React.createContext();

const App = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');

  const signIn = async () => {
    try {
      const result = await logIn();
      console.log(result);
      setIsLogin(true);
      setUserName(result.name);
      setUserMail(result.email);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    signIn();
  }, []);

  const data = {
    isLogin,
    userName,
    userMail,
  }

  return (
      <LoginContext.Provider value={data}>
        <div className="App">
          {/*라우터 사용시 수정 필요*/}

          <BasicLayout>
            <Favorites/>
          </BasicLayout>
        </div>
      </LoginContext.Provider>
  );
}

export default App;
