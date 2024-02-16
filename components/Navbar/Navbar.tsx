'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import logoImg from '../../app/asset/logo.svg';
import { API_USERS, BASE_API_HOST } from '../../app/constants/api';
import getErrorMessage from '../../app/utils/getErrorMessage';
import getFetchRequest from '../../app/utils/getFetchRequest';
import NavbarContent from './NavbarContent';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const isFolderPage = pathname === '/folder';
  const [userEmail, setUserEmail] = useState('');
  const [userProfileImg, setUserProfileImg] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, `${API_USERS}/1`);
        setUserEmail(result.data[0].email);
        setUserProfileImg(result.data[0].image_source);
      } catch (error) {
        const errorMessage = getErrorMessage(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <NavHeader $isFolderPage={isFolderPage}>
      <HeaderBox>
        <Link href="/">
          <HeaderLogo src={logoImg} alt="logo" priority />
        </Link>
        <NavbarContent userEmail={userEmail} userProfileImg={userProfileImg} />
      </HeaderBox>
    </NavHeader>
  );
}

interface NavHeaderProps {
  $isFolderPage: boolean;
}

const NavHeader = styled.header<NavHeaderProps>`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px 200px 32px;
  gap: 8px;
  background: #f0f6ff;
  z-index: 2;
  ${(props) =>
    props.$isFolderPage &&
    css`
      position: relative;
    `}
  @media (max-width: 1199px) {
    & {
      padding: 33px max(32px, calc((100vw - 800px) / 2)) 32px;
    }
  }

  @media (max-width: 767px) {
    & {
      padding: 18px 32px 17px;
    }
  }
`;
const HeaderBox = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
`;
const HeaderLogo = styled(Image)`
  width: 133px;
  height: 24px;
  cursor: pointer;
`;
