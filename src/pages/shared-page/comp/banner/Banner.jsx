import './Banner.css';

const Banner = () => {
  return (
    <div className='hero-banner'>
      <div className='avatar-box'>
        <img alt='아바타' src={`${process.env.PUBLIC_URL}/images/shared/shared-avatar.svg`} />
        <span>@코드잇</span>
      </div>
      <h1>⭐️ 즐겨찾기</h1>
    </div>
  );
};
export default Banner;
