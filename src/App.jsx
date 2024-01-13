import { useEffect, useState } from "react";
import { Header } from "./component/Header/header.jsx";
import { Footer } from "./component/Footer/footer.jsx";
import { Shared } from "./pages/shared.jsx";
import { getFetch } from "./api/getFetch.jsx";
import { getUserData } from "./api/getUserData.jsx";
import { Folder } from "./pages/folder.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

export default function App() {
  const [folder, setFolder] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getFetch();
      setFolder(data.folder);

      const user = await getUserData();
      setUser(user);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      {folder !== null ? (
        <Header folder={folder} user={user !== null ? user : ""} />
      ) : undefined}
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
