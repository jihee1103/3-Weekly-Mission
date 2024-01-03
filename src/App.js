import React, { useEffect, useState } from "react";
import Shared from "./pages/Shared";
import { getUser } from "./apis/api";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const checkUser = async () => {
    try {
      const userInfo = await getUser();
      if (!userInfo) {
        throw new Error("유저 정보가 없습니다!");
      }
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Shared />
      <Footer />
    </>
  );
}
