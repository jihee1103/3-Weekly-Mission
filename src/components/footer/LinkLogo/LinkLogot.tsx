import Link from 'next/link';

interface Prop {
  href: string;
  rel: string;
  target: string;
  logo: string;
}

export default function LinkLogo({ href, rel, target, logo }: Prop) {
  const LOGOS: { [name: string]: string } = {
    facebook: '/images/facebook.svg',
    twitter: '/images/twitter.svg',
    instagram: '/images/instagram.svg',
    youtube: '/images/youtube.svg',
  };

  return (
    <Link href={href} target={target} rel={rel}>
      <img src={LOGOS[logo]} alt={`${logo} 홈페이지로 연결된 ${logo} 로고`} />
    </Link>
  );
}
