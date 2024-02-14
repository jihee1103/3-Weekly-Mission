import React, { useEffect, useState } from "react";
import { getUser } from "./apis/api";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SharedPage from "./pages/SharedPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FolderPage from "./pages/FolderPage";
import { NavbarUserInfo } from "./types/userType";

export default function App() {
  const [user, setUser] = useState<NavbarUserInfo | undefined>();
  const checkUser = async () => {
    try {
      const userInfo: NavbarUserInfo = await getUser();
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
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage user={user} />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
