import { memo } from 'react';

import './LoginSuccessProfile.css';
import { IProfileData } from '@api/folder-page/getProfileData';

type TLoginSuccessProfileProps = {
  profileData: IProfileData;
};

const LoginSuccessProfile = ({ profileData }: TLoginSuccessProfileProps) => {
  const { email, image_source } = profileData;

  return (
    <div className='account-box'>
      <img className='account-profile' src={image_source} alt='프로필 이미지' />
      <p className='account-text'>{email}</p>
    </div>
  );
};

export default memo(LoginSuccessProfile);
