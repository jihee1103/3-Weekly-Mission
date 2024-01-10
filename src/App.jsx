import { useEffect, useState } from "react";
import logo from "./logo.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import instagram from "./instagram.png";
import search from "./search.png";
import defaultImage from "./card-component-default.png";
import "./footer-style.css";
import "./nav-style.css";
import "./header-style.css";
import "./card-style.css";
import "./search-bar-style.css";
import "./style.css";

function NavBar({ user }) {
  return (
    <>
      <div className="nav-section">
        <div className="nav-first-section">
          <img src={logo}></img>
        </div>

        <div className="nav-second-section">
          <div className="nav-profile">
            <img src={user.profileImageSource}></img>
          </div>
          <h3 className="nav-profile-info">{user.email}</h3>
        </div>
      </div>
    </>
  );
}

function Header({ folder, user }) {
  return (
    <header className="header-section">
      <NavBar user={user} />
      <div className="header-info">
        <img
          src={folder.owner.profileImageSource}
          className="header-profile"
        ></img>
        <div className="header-user">
          {"@"}
          {folder.owner.name}
        </div>
        <div className="header-title">{folder.name}</div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-first-section">
          <h3 className="footer-font-style">©codeit - 2023</h3>
        </div>

        <div className="footer-second-section">
          <div className="footer-second-section-wrap">
            <h3 className="footer-font-style">Privacy Policy</h3>
            <h3 className="footer-font-style">FAQ</h3>
          </div>
        </div>

        <div className="footer-third-section">
          <img src={facebook} className="footer-icon"></img>
          <img src={twitter} className="footer-icon"></img>
          <img src={youtube} className="footer-icon"></img>
          <img src={instagram} className="footer-icon"></img>
        </div>
      </footer>
    </>
  );
}

function SearchBar() {
  return (
    <div className="input-section">
      <input
        className="search-bar"
        type="text"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img src={search} className="input-icon" />
    </div>
  );
}

function Card({ imageSource, description, createdAt, url }) {
  return (
    <>
      <a href={url} className="card-url">
        <div className="card-container">
          <div className="image-wrap">
            <div className="image-container">
              <img src={imageSource} />
            </div>
          </div>
          <div className="card-content">
            <div className="card-description">
              <div className="description-section">
                <p>{description}</p>
              </div>
              <div className="time-section">
                <p>{createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

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
  console.log(user);

  return (
    <>
      {folder !== null ? (
        <Header folder={folder} user={user !== null ? user : "로그인"} />
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
