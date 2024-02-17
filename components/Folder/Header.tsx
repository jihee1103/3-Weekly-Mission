import { useEffect, useState } from "react";
import ProfileApi from "@/pages/folder/[id]";
import { ProfileId } from "@/pages/folder/type";
import Link from "next/link";
import Image from "next/image";
import * as S from "./Style";

export default function Header() {
  const [profileId, setProfileId] = useState<ProfileId | null>(null);

  const getProfileId = async () => {
    try {
      const userId: ProfileId = await ProfileApi();
      setProfileId(userId);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getProfileId();
  }, []);

  return (
    <>
      <S.Nav>
        <S.HeaderLinkBox>
          <Link href="/">
            <Image
              src={"/assets/Icons/logo.svg"}
              width={133}
              height={24}
              alt="홈 아이콘 이미지"
            />
          </Link>
          {profileId && (
            <S.ProfileBox>
              <S.ProfileBoxImg
                src={profileId?.data[0].image_source}
                alt="프로필 이미지"
              />
              <S.ProfileName>
                <span>{profileId?.data[0].email || ""}</span>
              </S.ProfileName>
            </S.ProfileBox>
          )}
        </S.HeaderLinkBox>
      </S.Nav>
    </>
  );
}
