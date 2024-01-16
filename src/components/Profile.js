import "./Profile.css";
import getData from "../api/getData";
import { useState, useEffect } from "react";

const Profile = function () {
  const [folderName, setFolderName] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getFolderData = async () => {
      const result = await getData("/sample/folder");
      setFolderName(result.folder.name);
    };

    getFolderData();

    const getUserData = async () => {
      const result = await getData("/sample/user");
      setUserData(result);
    };

    getUserData();
  }, []);

  return (
    <div className="Profile">
      <div className="box">
        <div className="personal">
          <img src={userData.profileImageSource} alt="profile사진" />
          <span>@{userData.name}</span>
        </div>
        <span className="bookmark">{folderName}</span>
      </div>
    </div>
  );
};

export default Profile;
