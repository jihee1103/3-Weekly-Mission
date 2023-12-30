import logo from "../images/logo.svg";
import { useState, useEffect } from "react";
import { getSampleUser } from "../api";
import "../Nav.css";

function Nav() {
  const [sampleId, setSampleId] = useState("");
  const [sampleEmail, setSampleEmail] = useState("");
  const [sampleProfile, setSampleProfile] = useState();

  const handleGetSampleUser = async () => {
    const { id, email, profileImageSource } = await getSampleUser();

    setSampleId(id);
    setSampleEmail(email);
    setSampleProfile(profileImageSource);
  };

  useEffect(() => {
    handleGetSampleUser();
  }, []);

  return (
    <nav>
      <a href="index.html">
        <img className="logo" src={logo} alt="홈으로 연결된 Linkbrary 로고" />
      </a>
      {sampleId ? (
        <div className="user">
          <img className="profile" src={sampleProfile} alt="프로필 사진" />
          <span>{sampleEmail}</span>
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
