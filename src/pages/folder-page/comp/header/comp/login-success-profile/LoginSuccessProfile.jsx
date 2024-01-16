import { memo } from 'react';
import './LoginSuccessProfile.css';

// {
//   "id": 1,
//   "created_at": "2023-06-04T13:03:01+00:00",
//   "name": "코드잇",
//   "image_source": "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
//   "email": "codeit@codeit.com",
//   "auth_id": "b9d4649a-8d92-4776-8f69-80abe2786721"
// }

/**
 *
 * @param {{profileData: { id: number, name: string, email: string, profileImageSource: string }}} param0
 */
const LoginSuccessProfile = ({ profileData }) => {
  const { email, image_source } = profileData;

  return (
    <div className='account-box'>
      <img className='account-profile' src={image_source} alt='프로필 이미지' />
      <p className='account-text'>{email}</p>
    </div>
  );
};

export default memo(LoginSuccessProfile);
