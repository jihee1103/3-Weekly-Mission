import React, { useEffect, useState } from "react";
import Shared from "./pages/Shared";
import { getUser } from "./apis/api";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const userCheck = async () => {
    let userInfo;
    try {
      userInfo = await getUser();
      if (userInfo) {
        setUser(userInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userCheck();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Shared />
      <Footer />
    </>
  );
}
