import { useEffect, useState } from "react";
import { Card } from "./component/Card/card.jsx";
import { Header } from "./component/Header/header.jsx";
import { Footer } from "./component/Footer/footer.jsx";
import { SearchBar } from "./component/SearchBar/searchbar.jsx";
import defaultImage from "./card-component-default.png";
import "./style.css";

export default function App() {
  const [folder, setFolder] = useState(null);
  const [user, setUser] = useState(null);

  const getFetch = async () => {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body;
  };

  const getUserData = async () => {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getFetch();
      setFolder(() => {
        return data.folder;
      });

      const user = await getUserData();
      setUser(() => {
        return user;
      });
    };
    getData();
  }, []);
  console.log(folder);

  return (
    <>
      {folder !== null ? (
        <Header folder={folder} user={user !== null ? user : ""} />
      ) : undefined}
      <div className="main-section">
        <SearchBar />
        <div className="card-component-section">
          {folder !== null
            ? folder.links.map((e) => {
                return (
                  <Card
                    key={e.id}
                    imageSource={
                      e.imageSource !== undefined ? e.imageSource : defaultImage
                    }
                    description={e.description}
                    createdAt={e.createdAt}
                    url={e.url}
                  />
                );
              })
            : undefined}
        </div>
      </div>
      <Footer />
    </>
  );
}
