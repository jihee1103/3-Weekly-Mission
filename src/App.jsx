import { useEffect, useState } from "react";
import logo from "./logo.png";
import profile from "./myprofile.png";
import backgroundProfile from "./background-profile.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import instagram from "./instagram.png";
import "./footer-style.css";
import "./nav-style.css";
import "./header-style.css";

function NavBar() {
  return (
    <>
      <div className="nav-section">
        <div className="nav-first-section">
          <img src={logo}></img>
        </div>

        <div className="nav-second-section">
          <div className="nav-background-profile">
            <img src={backgroundProfile}></img>
            <div className="nav-profile">
              <img src={profile}></img>
            </div>
          </div>
          <h3 className="nav-profile-info">Codeit@codeit.com</h3>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header-section">
      <NavBar />
      <div>프로필</div>
      <div>이름</div>
      <div>폴더 이름</div>
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

function Card({ imageSource, description, createAt }) {
  return (
    <>
      <div>
        <div style={{ position: "relative", margin: "50px 0 45px" }}>
          <ul style={{ display: "flex" }}>
            <img
              style={{ width: "340px", height: "200px", objectFit: "cover" }}
              src={imageSource}
            />
            <div
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              {description}
            </div>
            <div>{createAt}</div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [folder, setFolder] = useState(null);

  const getFetch = async () => {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    getFetch().then((data) => {
      setFolder(() => {
        return data.folder;
      });
    });
  }, []);

  return (
    <div>
      <Header />
      {folder !== null
        ? folder.links.map((e) => {
            console.log(e);
            return (
              <div key={e.id}>
                <Card
                  imageSource={e.imageSource}
                  description={e.description}
                  createAt={e.createAt}
                />
              </div>
            );
          })
        : undefined}
      <Footer />
    </div>
  );
}
