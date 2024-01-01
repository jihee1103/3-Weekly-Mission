import { useState, useEffect } from "react";
import SharedPage from "./pages/SharedPage";
import { getSampleUser } from "./api";
import "./styles/global.css";

const App = () => {
  const [user, setUser] = useState("");

  const handleLoad = async () => {
    let userInfo;
    try {
      userInfo = await getSampleUser();
    } catch (error) {
      console.log(error.message);
      return;
    }
    if (userInfo) {
      setUser(userInfo);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <SharedPage user={user} />
    </>
  );
};

export default App;
