"use client";

import { useEffect, useState } from "react";
import { User1Data } from "../../utils/types";
import Image from "next/image";
import getUser1Data from "../../api/getUser1Data";
import styles from "./index.module.css";

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
    <div className={styles.div}>
      {user1Data && (
        <Image
          src={user1Data.image_source}
          alt="유저 프로필 이미지"
          width={25}
          height={25}
        />
      )}
      <span>{user1Data && user1Data.email}</span>
    </div>
  );
};
export default FolderPageHeaderProfile;
