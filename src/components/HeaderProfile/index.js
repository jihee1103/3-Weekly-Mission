import { useEffect, useState } from "react";
import getUser1Data from "../../api/getUser1Data";
import styled from "styled-components";

const HeaderProfile = () => {
  const [user1Data, setUser1Data] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser1Data();
      setUser1Data(data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <HeaderProfileWrapper>
      {user1Data && <ProfileImage src={user1Data.image_source} />}
      <Email>{user1Data && user1Data.email}</Email>
    </HeaderProfileWrapper>
  );
};
export default HeaderProfile;

const HeaderProfileWrapper = styled.div`
  display: flex;
  align-items: center;
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
