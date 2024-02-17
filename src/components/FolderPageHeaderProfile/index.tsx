import { useEffect, useState } from "react";
import getUser1Data from "../../api/getUser1Data";
import styled from "styled-components";
import { User1Data } from "../../utils/types";

const FolderPageHeaderProfile = () => {
  const [user1Data, setUser1Data] = useState<User1Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser1Data();
      setUser1Data(data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <HeaderProfileWrapper>
      {user1Data && (
        <ProfileImage src={user1Data.image_source} alt="유저 프로필 이미지" />
      )}
      <Email>{user1Data && user1Data.email}</Email>
    </HeaderProfileWrapper>
  );
};
export default FolderPageHeaderProfile;

const HeaderProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
`;

const Email = styled.span`
  color: #373740;
  font-size: 14px;
  font-weight: 400;
`;
