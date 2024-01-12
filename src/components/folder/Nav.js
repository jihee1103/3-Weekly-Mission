import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../api.js";
import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <NavContent>
        <LogoLink href="./folder">
          <img
            className="header-logo-img"
            src="/imgs/logo.png"
            alt="코드잇로고"
          ></img>
        </LogoLink>
        <UserProfileInHeader />
      </NavContent>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 3.3rem 20rem 3.2rem;
  background: var(--linkbrary-bg, #f0f6ff);

  @media screen and (max-width: 1199px) {
    display: grid;
    grid-template-columns: minmax(32px, auto) minmax(32px, 800px) minmax(
        32px,
        auto
      );
    padding: 33px 0;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1199px) {
    grid-column: 2/3;
  }
`;

const LogoLink = styled.a`
  img {
    height: 2.4rem;
  }
`;

function UserProfileInHeader() {
  const [user, setUser] = useState();
  useEffect(() => {
    async function handleLoginProfile() {
      const { data } = await getUserProfile(1);
      const [userProfile] = data;
      setUser(userProfile);
    }
    handleLoginProfile();
  }, []);
  return (
    <UserProfileLink href="./folder">
      {user ? (
        <>
          <img
            className="user-profile-login-img"
            src={user.image_source}
            alt="사용자 이미지"
          />
          <span className="user-profile-login-email">{user.email}</span>
        </>
      ) : (
        <img src="/imgs/로그인.png" alt="로그인" />
      )}
    </UserProfileLink>
  );
}

const UserProfileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  .user-profile-login-img {
    width: 2.8rem;
  }
  .user-profile-login-email {
    color: var(--Linkbrary-gray100, #373740);
    font-size: 1.4rem;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
