function LinkLogo({ href, props, logo }) {
  const LOGOS = {
    facebook: "./images/facebook.svg",
    twitter: "./images/twitter.svg",
    instagram: "./images/instagram.svg",
    youtube: "./images/youtube.svg",
  };

  return (
    <a href={href} target={props.target} rel={props.rel}>
      <img src={LOGOS[logo]} alt={`${logo} 홈페이지로 연결된 ${logo} 로고`} />
    </a>
  );
}

export default LinkLogo;
