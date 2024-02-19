'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_API_HOST } from '../../../constants/api';
import getFetchRequest from '../../../utils/getFetchRequest';

export default function SharedInfo() {
  const API_FOLDER = 'sample/folder';
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState('');
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    const getSharedInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setAvatar(result.folder.owner.profileImageSource);
        setOwner(result.folder.owner.name);
        setFolderName(result.folder.name);
      } catch (error) {
        console.log(error);
      }
    };
    getSharedInfo();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Owner>
          <Avatar src={avatar} alt="유저 아바타 이미지" />
          <OwnerName>{owner}</OwnerName>
        </Owner>
        <FolderName className="shared-name">{folderName}</FolderName>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
  background: #f0f6ff;
  @media (max-width: 767px) {
    & {
      padding: 10px 0 40px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Owner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 47px;
  height: 47px;
  @media (max-width: 767px) {
    & {
      width: 40px;
      height: 40px;
    }
  }
`;
const OwnerName = styled.span`
  line-height: 24px;
  @media (max-width: 767px) {
    & {
      font-size: 14px;
      line-height: normal;
    }
  }
`;
const FolderName = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 767px) {
    & {
      font-size: 32px;
    }
  }
`;
