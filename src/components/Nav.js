import logo from "../images/logo.svg";
import { useState, useEffect } from "react";
import { getUser } from "../api";
import "./Nav.css";

function Nav() {
  const [sampleId, setSampleId] = useState("");
  const [sampleEmail, setSampleEmail] = useState("");
  const [sampleProfile, setSampleProfile] = useState();

  const handleGetUser = async () => {
    const { id, email, profileImageSource } = await getUser();

    setSampleId(id);
    setSampleEmail(email);
    setSampleProfile(profileImageSource);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <nav>
      <a href="index.html">
        <img className="logo" src={logo} alt="Linkbrary 로고" />
      </a>
      {sampleId ? (
        <div className="user">
          <img className="profile" src={sampleProfile} alt="프로필 사진" />
          <span className="email">{sampleEmail}</span>
        </div>
      ) : (
        <a className="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      )}
    </nav>
  );
}

export default Nav;
