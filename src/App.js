import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Shared from "./pages/Shared";
import Footer from "./Components/Footer";
import { getUser } from "./apis/api";

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
      <Shared user={user} />
      <Footer />
    </>
  );
}
