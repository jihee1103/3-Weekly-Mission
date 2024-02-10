import { useEffect, useState } from 'react';
import styled from 'styled-components';
import defaultImage from '../../asset/default-image.svg';
import { BASE_API_HOST } from '../../constants/api';
import getFetchRequest from '../../utils/getFetchRequest';
import Loading from '../Loading/Loading';

export default function SharedInfo() {
  const API_FOLDER = 'sample/folder';
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState('');
  const [folderName, setFolderName] = useState('');
  const [condition, setCondition] = useState('noData');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCondition('loading');
    const getSharedInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setAvatar(result.folder.owner.profileImageSource);
        setOwner(result.folder.owner.name);
        setFolderName(result.folder.name);
        setCondition('getInfoSuccess');
      } catch (error) {
        setErrorMessage((error as Error).message);
        setCondition('error');
      }
    };
    getSharedInfo();
  }, []);

  return (
    <Wrapper>
      {
        {
          loading: <Loading />,
          getInfoSuccess: (
            <Container>
              <Owner>
                <Avatar src={avatar || defaultImage} alt="유저 아바타 이미지" />
                <OwnerName>{owner}</OwnerName>
              </Owner>
              <FolderName className="shared-name">{folderName}</FolderName>
            </Container>
          ),
          error: errorMessage,
          noData: '데이터가 없습니다.',
        }[condition]
      }
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
