import './Banner.css';

const Banner = ({ userInfo }) => {
  return (
    <div className='hero-banner'>
      <div className='avatar-box'>
        <img
          className='avatar'
          alt='아바타'
          src={
            !userInfo ? `${process.env.PUBLIC_URL}/images/shared/shared-avatar.svg` : userInfo.owner.profileImageSource
          }
        />
        <span className='folder-owner'>{userInfo ? userInfo.owner.name : '@코드잇'}</span>
      </div>
      <h1 className='folder-name'>{userInfo ? userInfo.name : '⭐️ 즐겨찾기'}</h1>
    </div>
  );
};

export default Banner;
