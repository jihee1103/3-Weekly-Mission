import './LoginSuccessProfile.css';

/**
 *
 * @param {{profileData: { id: number, name: string, email: string, profileImageSource: string }}} param0
 */
const LoginSuccessProfile = ({ profileData }) => {
  const { email, profileImageSource } = profileData;

  return (
    <div className='account-box'>
      <img className='account-profile' src={profileImageSource} alt='프로필 이미지' />
      <p className='account-text'>{email}</p>
    </div>
  );
};

export default LoginSuccessProfile;
